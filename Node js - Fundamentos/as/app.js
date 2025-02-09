import * as fs from 'fs';

/*
console.time('Assíncrono');
var counter = 0;

for(var i = 0.; i < 1000; i++)
{
    fs.readFile('meu_arquivo.txt', (err, data) => {
        if (err){
            return console.error(err);
        }
        counter++;
        console.log('Assíncrono ' + data.toString() );
        if (counter === 1000){
            console.timeEnd('Assíncrono');
        }
    });
}
*/
//Tempo Assíncrono - 174.361 ms

console.time('Síncrono');

for(var i = 0; i < 1000; i++){
    var data = fs.readFileSync('meu_arquivo.txt');
    console.log('Síncrono ' + data.toString());
}
    console.timeEnd('Síncrono');

//Tempo síncrono - 236.178 ms