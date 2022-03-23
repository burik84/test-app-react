interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface IUserAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddres;
  phone: string;
  website: string;
  company: IUserCompany;
  comment?: string;
}

export interface IUserCard {
  id: number;
  name: string;
  companyName: string;
  cityName: string;
}

