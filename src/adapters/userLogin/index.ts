import {
  IFormDataValuesToEndpoint,
  IEndpointUserLogin,
  IFormDataValues,
  IUserLogin,
} from "../../models/IUserLogin";

const adaptedUserLogin = (user: IEndpointUserLogin) => {
  const formattedUserLogin: IUserLogin = {
    email: user.email,
    fName: user.f_name,
    lName: user.l_name,
    rolName: user.rol,
    status: user.status,
    idUser: user.id_user_admin,
    createdAt: user.created_at,
    urlImage: user.url_image,
  };

  return formattedUserLogin;
};

const adaptedUserToEndpointLogin = (user: IFormDataValues) => {
  const formattedUserToEndpointLogin: IFormDataValuesToEndpoint = {
    email: user.email,
    password: user.password,
  };

  return formattedUserToEndpointLogin;
};

export { adaptedUserLogin, adaptedUserToEndpointLogin };
