// TypeScript Types placeholder

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface Activity {
  id: string;
  userId: string;
  action: string;
  target: string;
  timestamp: string;
}
