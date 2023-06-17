import {
  useState,
  createContext,
  useContext,
  ReactElement,
  useMemo,
  useCallback,
} from "react";

type SidebarContext = {
  sidebarToggle: boolean;
  toggleSidebar: () => void;
  activeModule: string;
  handleActiveModule: (module: string) => void;
};

interface ISidebarProviderProps {
  children: ReactElement;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const SidebarContext = createContext<SidebarContext>({} as SidebarContext);

function SidebarProvider({ children }: ISidebarProviderProps) {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [activeModule, setActiveModule] = useState("");

  const handleActiveModule = useCallback((module: string) => {
    setActiveModule(module);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarToggle(!sidebarToggle);
  }, [sidebarToggle]);

  const value = useMemo(
    () => ({
      sidebarToggle,
      toggleSidebar,
      activeModule,
      handleActiveModule,
    }),
    [sidebarToggle, toggleSidebar, activeModule, handleActiveModule]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
}

export { SidebarProvider, useSidebar };
