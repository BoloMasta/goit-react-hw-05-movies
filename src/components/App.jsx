// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayouts';
// import MovieDetails from '../pages/MovieDetails';
// import Cast from '../components/Cast';
// import Reviews from '../components/Reviews';

const lazyRetry = function (componentImport) {
  return new Promise((resolve, reject) => {
    // check if the window has already been refreshed
    const hasRefreshed = JSON.parse(
      window.sessionStorage.getItem('retry-lazy-refreshed') || 'false'
    );
    // try to import the component
    componentImport()
      .then(component => {
        window.sessionStorage.setItem('retry-lazy-refreshed', 'false'); // success so reset the refresh
        resolve(component);
      })
      .catch(error => {
        if (!hasRefreshed) {
          // not been refreshed yet
          window.sessionStorage.setItem('retry-lazy-refreshed', 'true'); // we are now going to refresh
          return window.location.reload(); // refresh the page
        }
        reject(error); // Default error behaviour as already tried refresh
      });
  });
};

const Home = lazy(() =>
  lazyRetry(
    () => import('../pages/Home' /* webpackChunkName: "home" */),
    'Home'
  )
);

const MovieDetails = lazy(() =>
  lazyRetry(
    () =>
      import('../pages/MovieDetails' /* webpackChunkName: "movieDetails" */),
    'MovieDetails'
  )
);

const Cast = lazy(() =>
  lazyRetry(
    () => import('../components/Cast' /* webpackChunkName: "cast" */),
    'Cast'
  )
);

const Reviews = lazy(() =>
  lazyRetry(
    () => import('../components/Reviews' /* webpackChunkName: "reviews" */),
    'Reviews'
  )
);

const Movies = lazy(() =>
  lazyRetry(
    () => import('../pages/Movies' /* webpackChunkName: "movies" */),
    'Movies'
  )
);

const NotFound = lazy(() =>
  lazyRetry(
    () => import('../pages/NotFound' /* webpackChunkName: "notFound" */),
    'NotFound'
  )
);

// const Home = lazy(() => import('../pages/Home'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('../components/Cast'));
// const Reviews = lazy(() => import('../components/Reviews'));
//const Movies = lazy(() => import('../pages/Movies'));
// const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
