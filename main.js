
class Producto{
    constructor(nombre,codigo,precio,stock){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.precioConIva = precio * 1.21;
        this.stock = stock;
    }
}
const body = new Producto ("body rn", 1001, 800, 100);
const body2 = new Producto ("body 0-3m", 1002, 750, 100);
const escarpines = new Producto ("escarpines", 1003, 500, 100);
const pantalon = new Producto ("pantalon rn", 1004, 600, 100);
const ajuar = new Producto ("ajuar rn", 1005, 2500, 100);

const listaProductos = [body, body2,escarpines,pantalon, ajuar];

console.log(listaProductos);

let mensajeBienvenida = "Bienvenido, a ingresado a control de stock";
alert (mensajeBienvenida)


let busqueda = prompt ("Ingrese el nombre del producto");

function buscarProducto(producto){
    return producto.nombre == busqueda
}

let resultadoBusqueda = listaProductos.find(buscarProducto)

console.log(resultadoBusqueda);

if( resultadoBusqueda != undefined ){
    console.log(resultadoBusqueda);

}else{
    console.log("No se encontro el producto") 
    console.log("Stock completo: ", listaProductos);

}