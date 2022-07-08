import { DefaultLayout } from 'app/components/Layouts';
import Home from 'app/pages/Home';
import Upload from 'app/pages/Upload';
import React from 'react';
import { useRoutes } from 'react-router-dom';

import path from './path';

export default function Router() {
  return useRoutes([
    {
      path: path.home,
      element: <DefaultLayout />,
      children: [
        {
          path: path.home,
          element: <Home />,
        },
        {
          path: path.upload,
          element: <Upload />,
        },
      ],
    },
    { path: '*', element: <Home /> },
  ]);
}
