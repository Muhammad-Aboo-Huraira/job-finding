import React, { lazy, Suspense } from "react";
import { Loader } from "./components/Loader";

const FindJobs = lazy(() => import("./pages/FindJobs"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <FindJobs />
    </Suspense>
  );
}

export default App;
