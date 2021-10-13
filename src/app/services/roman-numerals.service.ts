import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }
  

  arabicToRoman(arabico: number){


    //se comprueba si el numero es valido
	
    if (isNaN(arabico) || arabico>1000 || arabico <0 || arabico ==0 || arabico==null) {
      return "error";
    }
    
    let arabicoIngresado=Array.from(arabico.toString());
    let resultado;
    let resultadoFinal="";
    switch(arabicoIngresado.length){
      case 4:
        resultado= this.calcularRomano(arabicoIngresado,4);
        break;
      case 3:
        resultado= this.calcularRomano(arabicoIngresado,3);;
        break;
      case 2:
        resultado= this.calcularRomano(arabicoIngresado,2);;
        break;
      case 1:
        resultado= this.calcularRomano(arabicoIngresado,1);;
        break;
      default:
        break;
    }
    for(var i=0;i<resultado.length;i++){
      resultadoFinal=resultadoFinal+resultado[i];
    }
    return resultadoFinal;
  }


   calcularRomano(arabico,tamaño) {
		const diccionarioMil=["","M","MM","MMM"];
		const diccionarioCien=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
		const diccionarioDiez=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
		const diccionarioUnidad=["","I","II","III","IV","V","VI","VII","VIII","IX"];
		let resuelto=[];
		let posicionDiccionario;
		if(tamaño===4){
			for(var i=0;i<tamaño;i++){
				posicionDiccionario=Number.parseInt(arabico[i]);
				if(i===0){
					resuelto.push(diccionarioMil[posicionDiccionario]);
				}
				if(i===1){
					resuelto.push(diccionarioCien[posicionDiccionario]);
				}
				if(i===2){
					resuelto.push(diccionarioDiez[posicionDiccionario]);
				}
				if(i===3){
					resuelto.push(diccionarioUnidad[posicionDiccionario]);
				}
			}
		}
		if(tamaño===3){
			for(var i=0;i<tamaño;i++){
				posicionDiccionario=Number.parseInt(arabico[i]);
				if(i===0){
					resuelto.push(diccionarioCien[posicionDiccionario]);
				}
				if(i===1){
					resuelto.push(diccionarioDiez[posicionDiccionario]);
				}
				if(i===2){
					resuelto.push(diccionarioUnidad[posicionDiccionario]);
				}
			
			}
		}
		if(tamaño===2){
			for(var i=0;i<tamaño;i++){
				posicionDiccionario=Number.parseInt(arabico[i]);
				if(i===0){
					resuelto.push(diccionarioDiez[posicionDiccionario]);
				}
				if(i===1){
					resuelto.push(diccionarioUnidad[posicionDiccionario]);
				}
			
			}
		}
		if(tamaño===1){
			for(var i=0;i<tamaño;i++){
				posicionDiccionario=Number.parseInt(arabico[i]);
			    resuelto.push(diccionarioUnidad[posicionDiccionario]);
			}
		}
			

		return resuelto;
	}





}
