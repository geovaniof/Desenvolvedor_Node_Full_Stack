import * as fs from 'fs';

var endereco: string = 'Av. Paulista 2000';

fs.writeFile('arquivo.txt', endereco, (err) =>{
    if (err){
        console.error(err);
    }

    console.log('Arquivo criado com sucesso!')
});