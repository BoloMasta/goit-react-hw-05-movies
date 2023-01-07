// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayouts';

// import Navbar from './Navbar/Navbar';

// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';
// import NotFound from '../pages/NotFound';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    // <>
    //   <Navbar />

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/movies" element={<Movies />} />
    //     <Route path="/movies/:movieId" element={<MovieDetails />} />

    //     {/* <Route path=":movieId" element={<MovieCard />} /> */}
    //     {/* <Route path="cast" element={<Cast />} />
    //       <Route path="reviews" element={<Reviews />} /> */}
    //     {/* </Route> */}
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </>
  );
};
