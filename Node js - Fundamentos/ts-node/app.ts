import {appendFile } from 'fs/promises';

var data: string = 'TreinaWeb';

appendFile('meu_arquivo2.txt', data).then((a) =>{
    console.log('Arquivo foi criado/atualizado com sucesso');
}).catch((e) => {
    console.log('Erro: ', e);
});