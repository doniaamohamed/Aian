import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';
import { InviteMemberDto } from './dto/invite-member.dto';

@Injectable()
export class MembersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  private async assertMembership(organizationId: string, userId: string) {
    const requester = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { organizationId: true },
    });

    if (!requester || requester.organizationId !== organizationId) {
      throw new ForbiddenException({
        success: false,
        message: 'You are not a member of this organization.',
        error: { type: 'ForbiddenException' },
      });
    }
  }

  private generateTemporaryPassword(): string {
    const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const lower = 'abcdefghijkmnopqrstuvwxyz';
    const digits = '23456789';
    const special = '!@#$%^&*';
    const all = upper + lower + digits + special;

    const pick = (chars: string) => chars[randomInt(chars.length)];

    let password =
      pick(upper) + pick(lower) + pick(digits) + pick(special);

    for (let i = password.length; i < 12; i++) {
      password += pick(all);
    }
    return password
      .split('')
      .sort(() => randomInt(2) - 0.5)
      .join('');
  }

  async listMembers(organizationId: string, userId: string) {
    await this.assertMembership(organizationId, userId);

    return this.prisma.user.findMany({
      where: { organizationId },
      select: {
        id: true,
        fullName: true,
        email: true,
        status: true,
        memberStatus: true,
        joinedAt: true,
        createdAt: true,
        role: { select: { id: true, key: true, name: true } },
      },
    });
  }

  async inviteMember(
    organizationId: string,
    dto: InviteMemberDto,
    invitedByUserId: string,
  ) {
    await this.assertMembership(organizationId, invitedByUserId);

    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException({
        success: false,
        message: 'A user with this email already exists.',
        error: { type: 'ConflictException' },
      });
    }

    const role = await this.prisma.role.findFirst({
      where: {
        id: dto.roleId,
        OR: [{ organizationId: null }, { organizationId }],
      },
    });
    if (!role) {
      throw new NotFoundException({
        success: false,
        message: 'Role not found for this organization.',
        error: { type: 'NotFoundException' },
      });
    }

    const temporaryPassword = this.generateTemporaryPassword();
    const passwordHash = await bcrypt.hash(temporaryPassword, 10);

    const newMember = await this.prisma.user.create({
      data: {
        fullName: dto.fullName,
        email: dto.email,
        passwordHash,
        status: 'active',
        organizationId,
        roleId: dto.roleId,
        memberStatus: 'invited',
        invitedByUserId,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        memberStatus: true,
        createdAt: true,
        role: { select: { id: true, key: true, name: true } },
      },
    });

    await this.emailService.sendBrandedEmail(
      dto.email,
      'You have been invited to join Aian',
      `<h2>Welcome to Aian, ${dto.fullName}!</h2>
       <p>You've been invited to join an organization on Aian.</p>
       <p><strong>Email:</strong> ${dto.email}</p>
       <p><strong>Temporary Password:</strong> ${temporaryPassword}</p>
       <p>Please log in and change your password as soon as possible.</p>
       <a href="http://localhost:3000/login" class="btn">Login Now</a>`,
    );

    return newMember;
  }

  async changeRole(organizationId: string, memberId: string, dto: any) {
  }

  async changeStatus(organizationId: string, memberId: string, dto: any) {
    
  }

  async removeMember(organizationId: string, memberId: string) {
    
  }
}