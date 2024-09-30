const axios = require('axios').default;

axios.get('http://localhost:3000/clientes')
    .then((datos) => {
        console.log(datos.data);
    });

axios.get('http://localhost:3000/clientes/1')
    .then((datos) => {
        console.log(datos.data);
    });

axios.post('http://localhost:3000/clientes', {
    id: 5,
    nombre: "probando nombre",
    apellido: "probando apellido"
})
    .then((datos) => {
        console.log(datos.data);
    });
