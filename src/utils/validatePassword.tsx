export default function validatePassword(password: string) {
  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.-])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  return regExp.test(password);
}
