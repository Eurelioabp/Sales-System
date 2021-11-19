class Producto {

	static contadorProductos = 0;

	constructor(nombre, precio){
		this._nombre = nombre;
		this._precio = precio;
		this._idProducto = ++Producto.contadorProductos;
	}

	get idProducto(){
		return this._idProducto;
	}

	get nombre(){
		return this._nombre;
	}

	set nombre(nombre) {
		this._nombre = nombre;
	}

	get precio() {
		return this._precio;
	}

	set precio(precio) {
		this._precio = precio;
	}

	toString() {
		return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: Bs ${this._precio} `;
	};
};

class Orden {

	static contadorOrdenes = 0;

	static get MAX_PRODUCTOS() {
		return 5;
	}

	constructor(){
		this._idOrden = ++Orden.contadorOrdenes
		this._productos = [];
		//this._contadorProductosAgregados = 0;

	}

	get idOrden (){
		return this._idOrden;
	}

	agregarProducto(producto){
		if(this._productos.length < Orden.MAX_PRODUCTOS){
			this._productos.push(producto);
			//this._productos[this._contadorProductosAgregados++] = producto; ->Otra sintaxis para resolverlo.
		}
		else {
			console.log("No se pueden agregar más productos")
		}
	}

	calcularTotal(){
		let totalVenta = 0;
		for (let producto of this._productos) {
			totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio;
		}
		return totalVenta;
	}

	mostrarOrden(){
		let productosOrden = "";
		for(let producto of this._productos) {
			productosOrden += "\n{" + producto.toString() + "} ";
		}

		return console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
	}
}

let producto1 = new Producto("Shampoo", 200);
let producto2 = new Producto("Camisa", 500);

let orden1 = new Orden();

orden1.agregarProducto(producto1) //->Le agrega el producto a la orden al llamar al método (agregarProducto);
orden2.agregarProducto(producto2) // -> Lo mismo que el de arriba.


console.log(orden1.mostrarOrden()); //->Muestra tu factura en pantalla.

/*
Orden: 1 Total: 400, Productos: 
{idProducto: 1, nombre: Shampoo, precio: Bs 100 } 
{idProducto: 2, nombre: camisa, precio: Bs 300 } 

Esto será lo que verás en pantalla. Ya depende de lo que agregarás que verás tus resultados para tu factura.
*/
