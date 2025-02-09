/*import { pessoa, sum, number, b as number2} from './pessoa.js';*/
import * as ModuloPessoa from './pessoa.js';

/*
--Primeiro exemplo de importação

console.log(pessoa.nome);
pessoa.andar();

console.log(sum());

console.log(number);
console.log(number2);
*/

/*Segundo exemplo de importação*/
console.log(ModuloPessoa.pessoa.nome);
ModuloPessoa.pessoa.andar();
console.log(ModuloPessoa.soma());