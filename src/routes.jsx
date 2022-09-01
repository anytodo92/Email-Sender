import Foundation from "./layouts/Foundeation"
import NonProfit from "./layouts/Nonprofit"
import History from "./layouts/History"

const routes = [
  {
    name: 'Foundations',
    key: 'foundation',
    route: '/foundation',
    component: <Foundation />
  },
  {
    name: 'Nonprofits',
    key: 'nonprofit',
    route: '/nonprofit',
    component: <NonProfit />
  },
  {
    name: 'History', 
    key: 'history',
    route: '/history',
    component: <History />
  }
]

export default routes