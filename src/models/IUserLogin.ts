export interface IUserLogin {
  idUser: string;
  rolName: string;
  status: string;
  email: string;
  fname: string;
  lname: string;
  urlImage?: string;
  createdBy: string;
}

export interface IEndpointUserLogin {
  email: string;
  fname: string;
  lname: string;
  rol_name: string;
  status: string;
  id_user_admin: string;
  url_image: string;
  created_by: string;
}

export interface IFormDataValues {
  user: string;
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
