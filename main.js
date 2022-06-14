class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    actualizarStock(cantidad) {
        this.stock = this.stock = cantidad
    }
}

const productos = [];
let total = 0;

productos.push(new Producto("Aceite esencial", 30000, 20));
productos.push(new Producto("Velas aromaticas", 40000, 5));
productos.push(new Producto("Desodorante natural", 20000, 12));

const listaDeProductos = () => {
    let listaDeProductos = [];
    productos.forEach(producto => listaDeProductos.push(` Nombre: ${producto.nombre} - Precio: $ ${producto.precio}`));

    return listaDeProductos.join("\n");
}

const carritoDeCompras = () => {
    let producto = "";
    let cantidad = 0;
    let precio = 0;

    do {
        producto = prompt("¿Que producto deseas comprar? \n 1.Aceite esencial \n 2.Velas aromaticas \n 3.Desodorante natural", "ejemplo: Aceite esencial");
        cantidad = prompt("¿Cuantos productos quieres comprar?");

        switch (producto) {
            case productos[0].nombre:
                productos[0].actualizarStock(cantidad);
                if (productos[0].stock < 0 || isNaN(cantidad)) {
                    alert("El producto no se encuentra disponible.");
                    precio = 0;
                    cantidad = 0;
                } else {
                    precio = productos[0].precio;
                }
                break;
            case productos[1].nombre:
                productos[1].actualizarStock(cantidad);
                if (productos[1].stock < 0 || isNaN(cantidad)) {
                    alert("El producto no se encuentra disponible.");
                    precio = 0;
                    cantidad = 0;
                } else {
                    precio = productos[1].precio;
                }
                break;
            case productos[2].nombre:
                productos[2].actualizarStock(cantidad);
                if (productos[2].stock < 0 || isNaN(cantidad)) {
                    alert("El producto no se encuentra disponible.");
                    precio = 0;
                    cantidad = 0;
                } else {
                    precio = productos[2].precio;
                }
                break;
            default:
                alert("Alguno de los ingresados no es correcto");
                precio = 0;
                cantidad = 0;
        }
        total = total + precio * cantidad;
        otroProducto = confirm("¿Quieres agregar otro producto?");

        let nombreProducto = document.getElementById("nombre-producto");
        nombreProducto.innerText = producto;
        let cantidadProducto = document.getElementById("cantidad-producto");
        cantidadProducto.innerText = cantidad;
        let totalProducto = document.getElementById("total-producto");
        totalProducto.innerText = total;
    } while (otroProducto);

};

const comprarProductos = () => {
    confirm(`Nuestros productos son: \n ${listaDeProductos()}`);
    carritoDeCompras();

};

comprarProductos();