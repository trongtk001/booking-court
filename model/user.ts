// Purpose: Model for user.
export type User = {
  id: number;
  userName: string;
  email: string;
  role: number;
  token: string;
  tokenExpiredAt: Date;
};
