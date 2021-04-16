import { lazy } from 'react';

const Index = lazy(() => import('../Index'));
const About = lazy(() => import('../About'));

const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  }
];

export default routes