import { AppProps } from "next/app";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Roboto_Flex } from "next/font/google";
import "../styles/global.css";

const robotoFlex = Roboto_Flex({
  weight: ["500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <main className={`${robotoFlex.variable} font-mono`}>
          <Component {...pageProps} />
        </main>
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
