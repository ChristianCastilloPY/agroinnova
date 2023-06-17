import {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactElement,
  useMemo,
} from "react";

interface ILoadingRequestContextData {
  isLoadingRequest: boolean;
  showLoading: () => void;
  hiddenLoading: () => void;
}

interface ILoadingRequestContextProps {
  children: ReactElement;
}

const LoadingRequestContext = createContext({} as ILoadingRequestContextData);

function LoadingRequestProvider({ children }: ILoadingRequestContextProps) {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hiddenLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const value = useMemo(
    () => ({
      isLoadingRequest: isLoading,
      showLoading,
      hiddenLoading,
    }),
    [isLoading, showLoading, hiddenLoading]
  );
  return (
    <LoadingRequestContext.Provider value={value}>
      {children}
    </LoadingRequestContext.Provider>
  );
}

function useLoadingRequest(): ILoadingRequestContextData {
  const context = useContext(LoadingRequestContext);

  if (!context) {
    throw new Error(
      "useLoadingRequest must be used within an LoadingRequestProvider"
    );
  }
  return context;
}

export { LoadingRequestProvider, useLoadingRequest };
