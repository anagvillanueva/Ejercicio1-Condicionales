// Solicitar topping al usuario
let topping = prompt("Elige un topping: Oreo, KitKat, Brownie");

// Definir precios de los helados y toppings
let precioHelado = 50;
let precioOreo = 10;
let precioKitKat = 15;
let precioBrownie = 20;

// Calcular el precio del helado según el topping elegido
if (topping.toLowerCase() === "oreo") {
    console.log("El precio del helado con topping de Oreo es: " + (precioHelado + precioOreo) + " MXN");
} else if (topping.toLowerCase() === "kitkat") {
    console.log("El precio del helado con topping de KitKat es: " + (precioHelado + precioKitKat) + " MXN");
} else if (topping.toLowerCase() ===

    "brownie") {
    console.log("El precio del helado con topping de Brownie es: " + (precioHelado + precioBrownie) + " MXN");
} else {
    console.log("No tenemos este topping, lo sentimos. El precio del helado sin topping es: " + precioHelado + " MXN");
}

// Usuario: OreO -- oreo, KITKAT -- kitkat .toLowerCase() para convertir en minusculas toUpperCase() 