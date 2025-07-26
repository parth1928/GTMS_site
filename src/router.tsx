import { lazy, type ReactNode, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppProvider } from "components/AppProvider";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

const App = lazy(() => import("./pages/App"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Team26 = lazy(() => import("./pages/Team26"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Supporters = lazy(() => import("./pages/Supporters"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const SomethingWentWrongPage = lazy(
  () => import("./pages/SomethingWentWrongPage"),
);

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <AppProvider>
          <SuspenseWrapper>
            <App />
          </SuspenseWrapper>
        </AppProvider>
      )
    },
    {
      path: "/about",
      element: (
        <AppProvider>
          <SuspenseWrapper>
            <AboutUs />
          </SuspenseWrapper>
        </AppProvider>
      )
    },
    {
      path: "/team26",
      element: (
        <AppProvider>
          <SuspenseWrapper>
            <Team26 />
          </SuspenseWrapper>
        </AppProvider>
      )
    },
    {
      path: "/gallery",
      element: (
        <AppProvider>
          <SuspenseWrapper>
            <Gallery />
          </SuspenseWrapper>
        </AppProvider>
      )
    },
    {
      path: "/supporters",
      element: (
        <AppProvider>
          <SuspenseWrapper>
            <Supporters />
          </SuspenseWrapper>
        </AppProvider>
      )
    },
    {
      path: "/contact",
      element: (
        <AppProvider>
          <SuspenseWrapper>
            <ContactUs />
          </SuspenseWrapper>
        </AppProvider>
      )
    },
    {
      path: "/thank-you",
      element: (
        <AppProvider>
          <SuspenseWrapper>
            <ThankYou />
          </SuspenseWrapper>
        </AppProvider>
      )
    },
    {
      path: "*",
      element: (
        <SuspenseWrapper>
          <NotFoundPage />
        </SuspenseWrapper>
      ),
      errorElement: (
        <SuspenseWrapper>
          <SomethingWentWrongPage />
        </SuspenseWrapper>
      ),
    },
  ]
);
