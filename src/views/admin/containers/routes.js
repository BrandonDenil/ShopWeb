
import ListarProductos from '../productos/listarProductos'
import NuevoProducto from '../productos/nuevo'
import VerProducto from '../productos/VerProducto'

const routes=[
    { component: ListarProductos, path: '/admin/productos',exact:true, name: "productos" },
    { component: NuevoProducto, path: '/admin/productos/nuevo',exact:true, name: "nuevo producto" },
    { component: VerProducto, path: '/admin/productos/:id',exact:true, name: "ver producto" },
]

export default routes