document.addEventListener('DOMContentLoaded', () => {
    pintarProductos();

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
        actualizarCarrito(carrito);
    }
});