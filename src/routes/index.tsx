import { ComponentType, JSX, lazy } from 'react';

interface IRoute {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

const routes: IRoute[] = [
  { path: '/', Component: lazy(() => import('@/pages/Welcome')) },
  { path: '/onboarding', Component: lazy(() => import('@/pages/Onboarding')) },
  { path: '/comment-create', Component: lazy(() => import('@/pages/CommentCreate')) },
  { path: '/place', Component: lazy(() => import('@/pages/Place/Place')) },
  {
    path: '/place/amenities',
    Component: lazy(() => import('../pages/Place/Amenities')),
  },
  {
    path: '/place/work-times',
    Component: lazy(() => import('../pages/Place/WorkTimes')),
  },
  { path: '/place/problem', Component: lazy(() => import('../pages/Place/Problem')) },
];

export default routes;
