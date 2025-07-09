// Imports the function to create a browser-based router instance.
import { createBrowserRouter } from "react-router-dom";
// Imports React's 'lazy' for code-splitting and 'Suspense' for handling loading states.
import { lazy, Suspense } from "react";
// Imports a data object, likely for a specific component's initial state or props.
import { sentry } from "./locales/nasadummy";

// --- Component Imports ---

// Imports the fallback component to show while lazy-loaded components are loading.
import LoadingFallback from "./components/common/LoadingFallback";
// Imports the Error page component directly, as it's used in errorElement.
import Error from "./pages/Error/Error";

// --- Lazy-Loaded Page Components ---
// These components will be loaded only when the user navigates to their respective routes.
const Home = lazy(() => import("./pages/Home/Home"));
const Graph = lazy(() => import("./pages/Graph/Graph"));
const Test = lazy(() => import("./pages/Test/Test"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const AsteroidePage = lazy(() => import("./pages/Asteroide/Asteroide"));

// --- Lazy-Loaded Layout Components ---
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const LayoutSimple = lazy(() => import("./layouts/LayoutSimple"));


// --- Constants used in routes ---
// This data will be passed as a prop to the Graph component.
const sumObject = sentry;
// This video source is used as a default background for multiple layouts.
const defaultVideoSrc = "/muhold_compress.mp4";

// --- The Router Configuration ---
// This object defines all the application's routes and is the only export from this file.
export const router = createBrowserRouter([
  // Defines the root path group.
  {
    // The path for this route group.
    path: "/",
    // The element to render. It uses Suspense to handle the lazy loading of AppLayout.
    element: (
      <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
        <AppLayout
          showNavbar={false}
          backgroundConfig={{ type: "video", src: defaultVideoSrc }}
        />
      </Suspense>
    ),
    // The element to render if a routing error occurs.
    errorElement: (
      <LayoutSimple>
        <Error />
      </LayoutSimple>
    ),
    // Defines the nested child routes.
    children: [
      {
        // 'index: true' makes this the default child route for the "/" path.
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback message="Loading Home..." />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  // Defines the "asteroide" path group.
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
  // Defines the "graph" path group.
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
            {/* The Graph component receives the 'sumObject' as a prop. */}
            <Graph sumObject={sumObject} />
          </Suspense>
        ),
      },
    ],
  },
  // Defines the "test" path group.
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
  // Defines the "admin" path group.
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
  // A catch-all route for any path that doesn't match the ones defined above.
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