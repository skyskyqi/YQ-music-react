import React from "react";

import YQFriend from "../pages/friend";
import YQDiscover from "../pages/discover"
import YQRecommend from "../pages/discover/c-pages/recommend";
import YQRanking from "../pages/discover/c-pages/ranking";
import YQSongs from "../pages/discover/c-pages/songs";
import YQDjRadio from "../pages/discover/c-pages/djradio";
import YQArtist from "../pages/discover/c-pages/artist";
import YQAlbum from "../pages/discover/c-pages/album";

import YQMine from "@/pages/mine";
import YQPlayer from "@/pages/player";
import { Redirect } from "react-router-dom";

const routes = [
  {
    path:"/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    // exact: true,
    component: YQDiscover,
    routes: [
      {
        path: "/discover",
        exact:true,
        render: ()=> (
          <Redirect to={"/discover/recommend"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: YQRecommend
      },
      {
        path: "/discover/ranking",
        component: YQRanking
      },
      {
        path: "/discover/songs",
        component: YQSongs
      },
      {
        path: "/discover/djradio",
        component: YQDjRadio
      },
      {
        path: "/discover/artist",
        component: YQArtist
      },
      {
        path: "/discover/album",
        component: YQAlbum
      }
    ]
  }, 
  {
    path: "/friend",
    component: YQFriend
  },
  {
    path: "/mine",
    component: YQMine
  },
  {
    path: "/player",
    component:YQPlayer
  }
]

export default routes;