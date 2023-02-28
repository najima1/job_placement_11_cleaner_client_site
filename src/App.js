import { RouterProvider } from "react-router-dom";
import router from "./Component/Router/Router";
import Context_provider from "./Component/Context/Context_provider";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Context_provider>
          <Toaster />
          <RouterProvider router={router} />

        </Context_provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
