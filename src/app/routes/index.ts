import Home from "app/pages/Home"
import { routeI } from "types"

const publicRoutes:routeI[] = [
    {
        path:'/',
        component: Home
    }
]

const privateRoutes:routeI[] = [

]

export {publicRoutes, privateRoutes}
