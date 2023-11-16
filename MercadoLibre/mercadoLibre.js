let inputBusqueda = document.getElementById('inputBusqueda');
let mainContent = document.getElementById("mainContent");

class Automovil {
    constructor(marca, modelo, precio, imagen, año, km, ciudad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.año = año;
        this.km = km;
        this.ciudad = ciudad;
    }
}

let img1 = "./imagenes/carrito.jpg";
let img2 = "./imagenes/model-y-social-global.webp_232547644.webp";
let img3 = "./imagenes/450_1000 (2).jpg";
let img4 = "./imagenes/01042022-PORTADA-Toyota-bZ4X.jpg";

/* let auto1 = new Automovil("Super Carro", "Velar-R 170 HP", 70000000, img1, 2005, 207, "Pradera - Bogotá - Huila");
let auto2 = new Automovil("Venid", "88", 309380, img2, 2003, 20000, "Soacha - Bogota -Cundinamarca");
let auto3 = new Automovil("Ferrari", "2023",  309380, img3, 999,  309380, "Medellin- Antoquia");
let auto4 = new Automovil("filian", "2027", 309380, img4, 2012, 26000, "Soacha - Bogota -Cundinamarcao"); */

let autos = [auto1, auto2, auto3, auto4];

    inputBusqueda.addEventListener("input", function(event) {
        let userInput = event.target.value.toLowerCase();
        mainContent.innerHTML = ''; // Limpia el contenido anterior

        for (let auto of autos) {
            if (userInput === '' || auto.marca.toLowerCase().includes(userInput)) {
                // Crea la caja de producto para el auto correspondiente
                let boxProducto = document.createElement("div");
                mainContent.appendChild(boxProducto);
                boxProducto.setAttribute("class", "box-producto");

                // Caja imagen
                let boxImg = document.createElement("div");
                boxProducto.appendChild(boxImg);
                boxImg.setAttribute("class", "box-img");

                let imgAuto = document.createElement("img");
                boxImg.appendChild(imgAuto);
                imgAuto.setAttribute("src", auto.imagen);
                imgAuto.setAttribute("class", "img-auto");

                // Caja información
                let boxInfo = document.createElement("div");
                boxProducto.appendChild(boxInfo);
                boxInfo.setAttribute("class", "box-info");

                let marca = document.createElement("label");
                boxInfo.appendChild(marca);
                let txtNodeMarca = document.createTextNode(auto.marca + "  " + auto.modelo);
                marca.appendChild(txtNodeMarca);
                marca.setAttribute("class", "marca");

                // Precio
                let precio = document.createElement("label");
                boxInfo.appendChild(precio);
                let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
                let txtNodePrecio = document.createTextNode("$ " + precioStr);
                precio.appendChild(txtNodePrecio);
                precio.setAttribute("class", "precio");

                // Año
                let año = document.createElement("label");
                boxInfo.appendChild(año);

                let txtNodeAño = document.createTextNode(`${auto.año} ${auto.km} km ${auto.ciudad}`);
                año.appendChild(txtNodeAño);
                año.setAttribute("class", "año");

                // Icono de corazón
                let boxCorazon = document.createElement("div");
                boxImg.appendChild(boxCorazon);
                let icon = document.createElement("i");
                boxCorazon.appendChild(icon);
                boxCorazon.setAttribute("class", "box-corazon");
                icon.setAttribute("class", "icon-corazon fa-regular fa-heart");

                // Línea divisoria
                let lineaDiv = document.createElement("hr");
            }
        }
    });


    for (let auto of autos) {
        
        let boxProducto = document.createElement("div");
        mainContent.appendChild(boxProducto);
        boxProducto.setAttribute("class", "box-producto");

        // Caja imagen
        let boxImg = document.createElement("div");
        boxProducto.appendChild(boxImg);
        boxImg.setAttribute("class", "box-img");

        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        imgAuto.setAttribute("src", auto.imagen);
        imgAuto.setAttribute("class", "img-auto");

        // Caja información
        let boxInfo = document.createElement("div");
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute("class", "box-info");

        let marca = document.createElement("label");
        boxInfo.appendChild(marca);
        let txtNodeMarca = document.createTextNode(auto.marca + "  " + auto.modelo);
        marca.appendChild(txtNodeMarca);
        marca.setAttribute("class", "marca");

        // Precio
        let precio = document.createElement("label");
        boxInfo.appendChild(precio);
        let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
        let txtNodePrecio = document.createTextNode("$ " + precioStr);
        precio.appendChild(txtNodePrecio);
        precio.setAttribute("class", "precio");

        // Año
        let año = document.createElement("label");
        boxInfo.appendChild(año);

        let txtNodeAño = document.createTextNode(`${auto.año} ${auto.km} km ${auto.ciudad}`);
        año.appendChild(txtNodeAño);
        año.setAttribute("class", "año");

        // Icono de corazón
        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon);
        let icon = document.createElement("i");
        boxCorazon.appendChild(icon);
        boxCorazon.setAttribute("class", "box-corazon");
        icon.setAttribute("class", "icon-corazon fa-regular fa-heart");

        // Línea divisoria
        let lineaDiv = document.createElement("hr");
    }