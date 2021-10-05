import Login from '../login/login'

import ListarProductos from '../productos/listarProductos'

const routes=[
    { component: ListarProductos, path: '/admin/productos', name: "productos" },
    { component: Login, path: '/admin/login', name: "login" },
]

export default routes