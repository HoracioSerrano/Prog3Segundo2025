/*
Variables de entorno: npm run 00VariablesEntorno
Con el script siendo
"00VariablesEntorno": "node --watch --env-file=.env 00VariablesEntorno.js"
*/

console.log(`
    Apellido: ${process.env.APELLIDO}
     --- 
    Nombre: ${process.env.NOMBRE}
    `);//<-- con el parametro --env-file=.env levanta las variables de entorno desde el archivo .env

