import React, { memo } from 'react';
import {renderRoutes} from 'react-router-config';

import routes from './router';

import YQAppHeader from "components/app-header";
import YQAppFooter from "components/app-footer";
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <HashRouter>
      <YQAppHeader/>
        {renderRoutes(routes)}
      <YQAppFooter/>
    </HashRouter>
  )
})
