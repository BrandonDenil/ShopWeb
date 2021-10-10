import Login from '../login/login'

import ListarProductos from '../productos/listarProductos'
import NuevoProducto from '../productos/nuevo'

const routes=[
    { component: ListarProductos, path: '/admin/productos',exact:true, name: "productos" },
    { component: NuevoProducto, path: '/admin/productos/nuevo',exact:true, name: "nuevo producto" },
    { component: Login, path: '/admin/login', name: "login" },
]

export default routes