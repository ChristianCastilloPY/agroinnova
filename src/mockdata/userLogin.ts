import { IUserLogin } from "../models/IUserLogin";
import avatar from "../assets/img/avatar1.jpeg";

const user: IUserLogin = {
  idUser: "1",
  rolName: "SUPER_ADMIN",
  status: "ACTIVE",
  email: "email1@gmail.com",
  fname: "Leonardo",
  lname: "Medina",
  urlImage: avatar,
  createdBy: "19/10/2020",
};

export default user;
