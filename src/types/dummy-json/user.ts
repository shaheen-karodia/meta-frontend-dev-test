export type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  address: {
    state: string;
    country: string;
  };
  company: {
    department: string;
  };
};
