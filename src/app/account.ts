export class Account {
  balance: number;
  accountNumber: number;
  bank: {
      name: string;
      id: number;
      pib: string;
      nbsnumber: string;
  };
  client: {
      id: number;
      email: string;
      name: string;
      surname: string;
  };
  id: number;
}
