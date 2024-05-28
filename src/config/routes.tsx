import { IRoute } from '@/types/navigation';

export const ROUTES = {
  LANDING_PAGE: '/',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  FORGOT_PASSWORD: '/auth/forgot-password',
  EDIT_SCORE: '/soccer/my-scores',
  EDIT_MATCH: '/soccer/matches',
  EDIT_USER: '/users',
};

export const API_ROUTES = {
  SIGN_IN: '/api/auth/sign-in',
  SIGN_UP: '/api/auth/sign-up',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  ME: '/api/auth/me',
};

const routes: IRoute[] = [
  {
    name: 'Dashboard',
    path: '/',
    show: true,
    icon: 'tabler:layout-dashboard',
  },
  {
    name: 'My Scores',
    layout: '/soccer',
    path: '/my-scores',
    show: true,
    icon: 'tabler:scoreboard',
    children: [
      {
        name: 'Edit Score',
        layout: '/soccer/:id',
        path: '/my-scores',
        show: false,
      },
    ],
  },
  {
    name: 'Matches',
    layout: '/soccer',
    path: '/matches',
    show: true,
    icon: 'tabler:soccer-field',
  },
  {
    name: 'Ranking',
    layout: '/soccer',
    path: '/ranking',
    show: true,
    icon: 'ph:ranking-light',
  },
  {
    name: 'Users',
    layout: '/users',
    path: '',
    show: true,
    icon: 'tabler:users',
  },
];

export default routes;
