
import ListProducts from '../products/listProducts'
import NuevoProducto from '../products/newProduct'
import VerProducto from '../products/productView'

const routes=[
    { component: ListProducts, path: '/admin/productos',exact:true, name: "products" },
    { component: NuevoProducto, path: '/admin/productos/nuevo',exact:true, name: "nuevo producto" },
    { component: VerProducto, path: '/admin/productos/:id',exact:true, name: "ver producto" },
]

export default routes