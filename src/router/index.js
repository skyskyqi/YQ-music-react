import YQFriend from "@/pages/friend";
import YQDiscover from "@/pages/discover";
import YQMine from "@/pages/mine";
import YQPlayer from "@/pages/player";

const routes = [
  {
    path: "/",
    exact: true,
    component: YQDiscover
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