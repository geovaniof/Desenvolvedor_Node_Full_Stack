import {appendFile} from 'fs/promises';

appendFile('meu_arquivo2.txt', 'TreinaWeb').then((a) => {
    console.log('Arquivo foi criado/atalizado com sucesso.');
    }).catch((e) => {
       console.log('Erro: ' + e);
});