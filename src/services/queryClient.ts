import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60000 * 5, // 60.000 equivale a 1 minuto, cada 5 min la data se considerara stale
    },
  },
});

export default queryClient;
