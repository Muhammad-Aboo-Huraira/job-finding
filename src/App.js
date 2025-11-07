import React, { lazy, Suspense } from 'react';

const FindJobs = lazy(() => import('./pages/FindJobs'));

function App() {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FindJobs />
    </Suspense>
  );
}

export default App;
