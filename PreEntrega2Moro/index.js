/*
        PAGINA DE COMIDA
        - Stock a la venta(productos)
            * Variables --> guardar el stock
        - Eleccion del usuario (carrito)
            * Variables --> Guardar la eleccion del usuario
            * Variables --> Guardar el precio de los items
        
        - Info a mostrar: Stock, Carrito, PrecioCart(alerts)
        - Info a recibir: eleccion del cliente (prompts)

*/

// declaracion de variables 
let stock = "1. Milanesa  x 2000$ \n 2. Ravioles x 1700$ \n 3. Pollo x 1500$ \n 4. Guiso x 1300$ \n 0. para terminar "
let user = prompt("Ingrese su nombre").toLowerCase()
alert("Bienvenido "+ user)
let eleccionUser = parseInt(prompt( `${user} estas son nuestras comidas, porfavor elige una opcion: \n ${stock} `))
let itemElegido = ""
let precioItem = 0

// funcion para agregar el producto al carrito
function addCarrito(comida,precio){
    alert("agregamos tu comida al carrito")
    itemElegido += `${comida} \n`
    precioItem += precio
}

// funcion para mostrar lo pedido
function pedido(){
    if (precioItem === 0){
        alert(`${user} no has agregado nada a tu carrito, lamentamos que no le haya convencido nuestro catalogo`)

    }else{
        alert(`${user} la compra de ${itemElegido} seria de ${precioItem} pesos`)

        let numero = parseInt(prompt("si eres empleado de la empresa marca 1 y si no eres empleado marca 2"))
        while (numero != 1 && numero != 2){
            numero = parseInt(prompt("has ingresado un numero invalido, ingrese 1 si eres empleado o 2 si no lo eres"))
        }

        let porcentaje = (precioItem * 0.15)
        let descuento = (precioItem - porcentaje)

        if (numero === 1){
            alert(`${user} como eres empleado de la empresa tienes un codigo de descuento del 15% entonces la comida saldria ${descuento}`)
        
        }else{
            alert(`${user} como no eres empleado de la empresa la comida saldria ${precioItem}`)
        }
    }   

}

// funcion para acordar metodo de pago
function compra(){
    if (precioItem != 0 ){
        const metodo = parseInt(prompt("1. abonar con efectivo al repartidor \n 2. tajerta debito/credito \n 3.mercado pago"))

        while (metodo != 1 && metodo != 2 && metodo != 3){
            metodo = parseInt(prompt("1. abonar con efectivo al repartidor \n 2. tajerta debito/credito \n 3.mercado pago"))
        }
        switch(metodo){
            case 1:
                alert("el repartidor llevara el ticket asi lo abonas en efectivo")
                break

            case 2:
                prompt("ingrese el numero de su tarjeta")
                prompt("ingrese la fecha de vencimiento")
                prompt("ingrese el codigo de seguridad de tres digitos")
                break
            
            case 3:
                alert("nuestro Alias: el.barsito.mp \n nuestro CBU: 00000513548496")
                break
            
            default:
                alert("ingrese un numero correcto")
                break
        }
        alert(`${user} gracias por realizar el pedido, espero que lo disfrute`)
    } 
}



while(eleccionUser !=0){
    switch(eleccionUser) {
        case 1:
            addCarrito("Milanesa x1", 2000)
            break

        case 2: 
            addCarrito("Ravioles x1", 1700)
            break
        
        case 3:
            addCarrito("Pollo x1", 1500)
            break
        
        case 4:
            addCarrito("Guiso x1", 1300)
            break
        
        default:
            alert("no tenemos el producto elegido")
    } 
    eleccionUser = parseInt(prompt( `${user}  estas son nuestras comidas, porfavor elige una opcion: \n ${stock} `))
}

pedido()
compra()