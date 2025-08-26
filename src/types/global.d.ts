// This file helps TypeScript understand our path aliases
declare module '@/services/mailer' {
  export function mailer(params: { name: string; message: string }): Promise<{
    message: string;
    sent: boolean;
    data?: any;
  }>;
}
