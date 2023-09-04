export const metadata = {
    title: "My Store",
    description: "My Store Description"
}
export default function TiendaLayout({children}){
    return <>
    <h3>Seccion Tienda</h3>
    <ul>
        <li>Categorias</li>
        <li>Productos</li>
    </ul>
    {children}
    </>
}