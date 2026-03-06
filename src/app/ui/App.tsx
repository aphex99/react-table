import {QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";

import {queryClient} from "@/shared/config/queryClient/queryClient.ts";

import AppRouter from "../routes/AppRouter.tsx";


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter/>
      <Toaster/>
    </QueryClientProvider>
  );
};

export default App;