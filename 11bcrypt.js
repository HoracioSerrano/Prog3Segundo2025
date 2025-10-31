const bcrypt = require('bcrypt');
const saltRounds = 15;

async function Prueba(){

    const hashedPassword= await bcrypt.hash('ClaveSecreta', saltRounds);
    console.log('Hash a grabar en DB:', hashedPassword);

    
    //La clave Que se ingresa en login;
    const claveIngresadaEnLogin = 'SoyHoracio';
    const resultado = await bcrypt.compare(claveIngresadaEnLogin, hashedPassword)
    if(resultado){
        console.log('Clave Correcta');
    }else{
        console.log('Clave Incorrecta');
    }

    //La clave Que se ingresa en login;
    console.log('Segundo Intento:');
    const intento2 = 'ClaveSecreta';
    const resultado2 = await bcrypt.compare(intento2, hashedPassword)
    if(resultado2){
        console.log('Clave Correcta');
    }else{
        console.log('Clave Incorrecta');
    }
    
    
}

Prueba();
