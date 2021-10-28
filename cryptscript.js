/*
    Copyright 2021. Eduardo Programador
    www.eduardoprogramador.com
    consultoria@eduardoprogramador.com
*/ 

class CryptScript {    

    constructor(number) {
        this.number = number;
    }

    encodeStr(str) {
        
        let temp = btoa(str); 
        
        var c = "";
        
        for(let i of temp) {
            
            let n = i.charCodeAt(0);
            n += this.number; 

            c += String.fromCharCode(n);
        }        

        return c.split('').reverse().join('');
    }

    decodeStr(str) {

        var c = "";
        let temp = str.split('').reverse().join('');

        for(let i of temp) {

            let n = i.charCodeAt(0);
            n -= this.number;

            c += String.fromCharCode(n);

        }

        return atob(c);
    
    }


}