// @refresh reload
import { createTheme, CssBaseline, ThemeProvider } from "@suid/material";
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <Html lang="en">
      <Head>
        <Title>ChatIS by IS2511</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Suspense>
            <ErrorBoundary>
              <nav class="bg-sky-800">
                <ul class="container flex items-center p-3 text-gray-200">
                  <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                    <A href="/">Home</A>
                  </li>
                </ul>
              </nav>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </ThemeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
