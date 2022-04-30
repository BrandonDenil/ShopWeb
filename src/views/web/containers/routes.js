import Home from '../Home/Home'
import Caregories from '../shop/categories'

const routes = [
    { component: Home, path: '/home', exact: true, name: "Home" },
    { component: Caregories, path: '/categories', exact: true, name: "Categorias" }
]

export default routes