export class TransactionReceive {
  ammount: number;
  purpose: string;
  sender: {
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
  };
  receiver: {
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
  };
  currency: {
      name: string;
      description: string;
  };
  id: number;
  localDate: number;
}
