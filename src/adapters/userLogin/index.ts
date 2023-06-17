import {
  IFormDataValuesToEndpoint,
  IEndpointUserLogin,
  IFormDataValues,
  IUserLogin,
} from "../../models/IUserLogin";

const adaptedUserLogin = (user: IEndpointUserLogin) => {
  const formattedUserLogin: IUserLogin = {
    email: user.email,
    fname: user.fname,
    lname: user.lname,
    rolName: user.rol_name,
    status: user.status,
    idUser: user.id_user_admin,
    createdBy: user.created_by,
    urlImage: user.url_image,
    operations: user.operations,
    // resourcePermission: user.resource_permission,
  };

  return formattedUserLogin;
};

const adaptedUserToEndpointLogin = (user: IFormDataValues) => {
  const formattedUserToEndpointLogin: IFormDataValuesToEndpoint = {
    email: user.user,
    password: user.password,
  };

  return formattedUserToEndpointLogin;
};

export { adaptedUserLogin, adaptedUserToEndpointLogin };
