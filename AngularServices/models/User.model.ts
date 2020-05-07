export interface User {
  id: number;
  name: String;
  username: String;
  email: String;
  address: {
    street: String;
    suite: String;
    city: String;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    }
  }
  phone: number;
  website: String;
  company: {
    name: String;
    catchPhrase: String;
    bs: String
  }

}
