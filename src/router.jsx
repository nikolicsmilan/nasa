// src/router.jsx

import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { sentry } from "./locales/nasadummy";

// --- Component Imports ---
// The Fallback component is now imported from its own dedicated file.
import LoadingFallback from "./components/common/LoadingFallback";

// Page Components (Lazy Loaded)
import Error from "./pages/Error/Error";
const Home = lazy(() => import("./pages/Home/Home"));
const Graph = lazy(() => import("./pages/Graph/Graph"));
const Test = lazy(() => import("./pages/Test/Test"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const AsteroidePage = lazy(() => import("./pages/Asteroide/Asteroide"));

// Layout Components (Lazy Loaded)
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const LayoutSimple = lazy(() => import("./layouts/LayoutSimple"));


// --- Constants used in routes ---
// This data will be passed as a prop to the Graph component.
const sumObject = sentry;
// This video source is used for multiple backgrounds.
const defaultVideoSrc = "/muhold_compress.mp4";

// --- The Router Configuration ---
// This object defines all the application's routes and is the only export from this file.
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
        <AppLayout
          showNavbar={false}
          backgroundConfig={{ type: "video", src: defaultVideoSrc }}
        />
      </Suspense>
    ),
    errorElement: (
      <LayoutSimple>
        <Error />
      </LayoutSimple>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback message="Loading Home..." />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "asteroide",
    element: (
      <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
        <AppLayout
          showNavbar={true}
          backgroundConfig={{ type: "image", src: "/images/Asteroid_preview.jpg" }}
        />
      </Suspense>
    ),
    errorElement: (
      <LayoutSimple>
        <Error />
      </LayoutSimple>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback message="Loading Asteroide Page..." />}>
            <AsteroidePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "graph",
    element: (
      <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
        <AppLayout
          showNavbar={true}
          backgroundConfig={{ type: "video", src: defaultVideoSrc }}
        />
      </Suspense>
    ),
    errorElement: (
      <LayoutSimple>
        <Error />
      </LayoutSimple>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback message="Loading Graph Page..." />}>
            <Graph sumObject={sumObject} />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "test",
    element: (
      <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
        <AppLayout
          showNavbar={true}
          backgroundConfig={{ type: "image", src: "/images/starfield.png" }}
        />
      </Suspense>
    ),
    errorElement: (
      <LayoutSimple>
        <Error />
      </LayoutSimple>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback message="Loading Test Page..." />}>
            <Test />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "admin",
    element: (
      <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
        <AppLayout showNavbar={true} backgroundConfig={{ type: "none" }} />
      </Suspense>
    ),
    errorElement: (
      <LayoutSimple>
        <Error />
      </LayoutSimple>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback message="Loading Admin Page..." />}>
            <Admin />
          </Suspense>
        ),
      },
    ],
  },
  // Catch-all 404 route for any path that doesn't match the ones above.
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingFallback message="Loading Error Page..." />}>
        <LayoutSimple>
          <Error />
        </LayoutSimple>
      </Suspense>
    ),
  },
]);