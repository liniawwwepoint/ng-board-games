export interface Game {
  id: string;
  name: string;
  description: string;
  isAvailable: boolean;
  borrower?: string;
  borrowDate?: Date;
}
