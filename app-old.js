
const http = require('http');

http.createServer( (request, response ) => {


    response.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' )
    response.writeHead( 200, { 'Content-Type' : 'application/csv' })



    response.write(`id, nombre\n`);
    response.write(`1, María\n`);
    response.write(`2, Fernando\n`);
    response.write(`3, José\n`);
    response.write(`4, Carlos\n`);
    response.end()


} )
.listen( 8080 );

console.log('Escuchando en el puerto 8080')


