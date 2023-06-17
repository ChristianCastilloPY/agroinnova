import { TypeWithKey } from "../models/IErrorType";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    A5000: "Token invalido",
  };

  return codeMatcher[errorCode];
};

export default getValidationError;
