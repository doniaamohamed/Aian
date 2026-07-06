import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UserEntity } from './user.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService:UsersService
    ){}

    @Get('/:id')
    async findOne(@Param('id') id:string){
        try{
            const user= await this.usersService.findOneById(id);
            return {
                success:true,
                data:{user:new UserEntity(user)}
            };
        }catch(error:any){
            this.handleException(error);
        }
    }

    @Get()
    async findAllOrOneByEmail(@Query('email') email:string){
        if(email){
                try{
                const user= await this.usersService.findOneByEmail(email);
                return {
                    success:true,
                    data:{user:new UserEntity(user)}
                };
            }catch(error:any){
                this.handleException(error);
            }
        }else{
            const users= await this.usersService.findAll();
            return {
                success:true,
                data:{users:users.map(user => new UserEntity(user))}};
        }
    }
    
    @Patch('/:id')
    async updateUser(@Param('id') id:string,@Body() body:UpdateUserDTO){
        try{
            const user= await this.usersService.updateUser(id,body);
            return {
                success:true,
                data:{user:new UserEntity(user)}
            };
        }catch(error:any){
            this.handleException(error);
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id:string){
        try{
            const deletedUser= await this.usersService.delete(id);
            return deletedUser
        }catch(error:any){
            this.handleException(error);
        }
    }



    private handleException(error: any) {
        if (error.message === "user not found") {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
        throw new BadRequestException({
            success: false,
            error: error.message
        });
    }
}
