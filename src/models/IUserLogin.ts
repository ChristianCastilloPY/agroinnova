export interface IUserLogin {
  idUser: string;
  rolName: string;
  status: string;
  email: string;
  fName: string;
  lName: string;
  urlImage?: string;
  createdAt: string;
}

export interface IEndpointUserLogin {
  email: string;
  f_name: string;
  l_name: string;
  rol: string;
  status: string;
  id_user_admin: string;
  url_image: string;
  created_at: string;
}

export interface IFormDataValues {
  email: string;
  password: string;
}

export interface IFormDataValuesToEndpoint {
  email: string;
  password: string;
  repassword?: string;
}

export enum EnumStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
