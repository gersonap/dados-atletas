/*
Projeto de certificação 2 - Dados dos atletas
-------------------------------------------------
Curso de Lógica de Programação
DEVStart SENAI-Londrina/Brazil
Aluno: Gerson Pereira
*/
// Matriz de Objetos

class DadosDosAtletas {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        
    }; // fim constructor
    
    calculaCategoria(){
        if ( this.idade >= 9 && this.idade <= 11 ) {
            return `Infantil`;
        } else if ( this.idade >= 12 && this.idade <= 13 ) {
            return `Juvenil`;
        } else if ( this.idade >= 14 && this.idade <= 15 ) {
            return `Intermediário`;
        } else if ( this.idade >= 16 && this.idade <= 30 ) {
            return `Adulto`;
        }else {
            return `Sem Categoria`;
        }
    };
    calculaIMC(imc){
        return imc = this.peso / (this.altura * this.altura);
    }; 
    calculaMediaValida(){
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    };
    obtemNomeAtleta(){ return `--------------\nNome.........: ${this.nome}`; };
    obtemIdadeAtleta(){ return `Idade........: ${this.idade} Anos`; };
    obtemPesoAtleta(){ return `Peso.........: ${this.peso} Kg`; };
    obtemAlturaAtleta(){ 
        //altur = this.altura; 
        return `Altura.......: ${Number(this.altura).toFixed(2)}`; };
    obtemNotasAtleta(nota){ 
        nota = this.notas;
        nota.sort((a, b) => a - b);
        return `Notas........: ${this.notas}`; };
    obtemCategoria(){
        return "Categoria....: " + dadosDosAtletas.calculaCategoria();
    };
    obtemIMC(){
        return "IMC do Atleta: " + Number(dadosDosAtletas.calculaIMC()).toFixed(2);
    };
    obtemMediaValida(){
        return "Nota Média...: " + Number(dadosDosAtletas.calculaMediaValida()).toFixed(2);
    };

}; // fim class
let dadosDosAtletas = new DadosDosAtletas (
    "César Cabral", 
    30, 80, 1.7,
    [10, 9.34, 8.42, 10, 7.88]
);
console.log(dadosDosAtletas.obtemNomeAtleta());
console.log(dadosDosAtletas.obtemIdadeAtleta());
console.log(dadosDosAtletas.obtemPesoAtleta());
console.log(dadosDosAtletas.obtemAlturaAtleta());
console.log(dadosDosAtletas.obtemNotasAtleta());
console.log(dadosDosAtletas.obtemMediaValida());
console.log(dadosDosAtletas.obtemIMC());
console.log(dadosDosAtletas.obtemCategoria());