document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    mostrarJson();
});

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.segunda-navegacion');
    navegacion.classList.toggle('mostrar');
}

async function mostrarJson() {
    try {
        const resultado = await fetch('./vehiculos.json'); 
        const db = await resultado.json(); 

        const { vehiculos } = db;

        vehiculos.forEach( vehiculo => {
            const { id, imagen, nombre, descripcion, precio} = vehiculo;

            // DOM 
        
            const imagenVehiculo = document.createElement('IMG');
            imagenVehiculo.src = imagen;
            imagenVehiculo.classList.add('imagen');

            const nombreVehiculo = document.createElement('A');
            nombreVehiculo.textContent = nombre;
            nombreVehiculo.classList.add('nombre');
            nombreVehiculo.setAttribute('href', '/');

            const descripcionVehiculo = document.createElement('P');
            descripcionVehiculo.textContent = descripcion;
            descripcionVehiculo.classList.add('descripcion');

            const precioVehiculo = document.createElement('P');
            precioVehiculo.textContent = precio;
            precioVehiculo.classList.add('precio');

            const tarjetaVehiculo = document.createElement('DIV');
            tarjetaVehiculo.classList.add('vehiculo');

            tarjetaVehiculo.appendChild(imagenVehiculo);
            tarjetaVehiculo.appendChild(nombreVehiculo);
            tarjetaVehiculo.appendChild(descripcionVehiculo);
            tarjetaVehiculo.appendChild(precioVehiculo);

            // HTML
            document.querySelector('#vehiculos').appendChild(tarjetaVehiculo);
        });
    } catch (error) {
        console.log(error);
    }
}