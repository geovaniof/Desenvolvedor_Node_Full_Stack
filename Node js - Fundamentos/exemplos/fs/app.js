import * as fs from 'fs'

/*
fs.writeFile('arquivo.txt', 'TreinaWeb', (err) => {
    if (err){
        console.error(err);
    }

    console.log('Arquivo criado com sucesso!');
});    
*/

/*
fs.appendFile('arquivo.txt', 'TreinaWeb II', (err) => {
    if (err){
        console.error(err);
    }

    console.log('Arquivo atualizado com sucesso!');
});    ]
*/

/*
fs.readFile('arquivo.txt', (err, data) => {
    if (err){
        console.error(err);
    }

    console.log(data.toString());
});    
*/

let data = fs.readFileSync('arquivo.txt')
console.log(data.toString());