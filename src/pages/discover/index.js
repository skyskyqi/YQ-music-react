import React, { memo } from 'react';
import {
  DiscoverWrapper,
  DiscoverMenu,
} from "./style.js";
import { descoverMenu } from "@/commons/local-data.js";
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// import request from "@/services/request.js"

export default memo(function YQdiscover(props) {
  const { route } = props;
  const { routes } = route;

  return (
    <DiscoverWrapper>
      <div className="nav">
        <DiscoverMenu className="wrap-v1">
          {
            descoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.link}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </DiscoverMenu>
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
  )
})
