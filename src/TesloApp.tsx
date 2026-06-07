import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { appRouter } from "./app.router";

const queryClient = new QueryClient();

export const TesloApp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
    </>
  );
};
