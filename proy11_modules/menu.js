const mostrarMenu = () => {
    return new Promise(resolve =>{
        console.log(`========================`.green);
        console.log(` Seleccione una opción  `.green);
        console.log(`========================\n`.green);
        console.log(`${'1.'.green} Crear nuevo Producto`);
        console.log(`${'2.'.green} Listar Producto`);
        console.log(`${'3.'.green} Listar clientes`);
        console.log(`${'4.'.green} Listar pedidos`);
        console.log(`${'5.'.green} Enviar pedidos`);
        console.log(`${'6.'.green} Borrar pedido`);
        console.log(`${'0.'.green} Salir\n`);

        //Definir la interfaz del teclado para que el usuario interatue
        const readLine = require('readline').createInterface({
            input: process.stdin, //Node espera lo que digita el usuario
            output: process.stdout // Node muestra en consola un mensaje
        });
        // Crear la interfaz definida
        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        })

    })

};
const pausa = () => {
    return new Promise(resolve =>{
        const readLine = require('readline').createInterface({
            input: process.stdin, //Node espera lo que digita el usuario
            output: process.stdout // Node muestra en consola un mensaje
        });
        // Crear la interfaz definida
        readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        })
    })
};
module.exports ={
    mostrarMenu,
    pausa
}