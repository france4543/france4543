const checkgrade = (a) =>{
    if (a > 80 ){
        return ("A");
    }else if (a >70 && a<81){
        return ("B");
    }else if (a >60 && a<71){
        return ("C");
    }else if (a >50 && a<61){
        return ("D");
    }else{
        return ("F");
    }
}
console.log(checkgrade(12))