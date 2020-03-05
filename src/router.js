import Home from "./pages/home/index"
import Tongji from "./pages/tongji/index"
import Tiku from "./pages/tiku/index"
import Juanku from "./pages/juanku/index"
import Setting from "./pages/setting/index"

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/tongji",
    component: Tongji
  },
  {
    path: "/juanku",
    component: Juanku
  },
  {
    path: "/tiku",
    component: Tiku
  },
  {
    path: "/setting",
    component: Setting
  }
]

export default routes