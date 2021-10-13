import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from '../services/roman-numerals.service';


@Component({
  selector: 'app-to-roman',
  templateUrl: './to-roman.component.html',
  styleUrls: ['./to-roman.component.css']
})
export class  ToRomanComponent implements OnInit {

  constructor(private RomanNumeralsService: RomanNumeralsService) { }
  arabic = '';
  roman = '';
  ngOnInit(): void {
    
  }

  convertirNro(){
    
     // if (parseInt(this.arabic)|| parseInt(this.arabic)!=0 || parseInt(this.arabic)!=undefined  ) {
        let target = document.getElementById('result');

        if(this.RomanNumeralsService.arabicToRoman(parseInt(this.arabic)) ==="error"){
          target.innerHTML = "<p>" +  "error"  + "</p>";
          alert("Error!, Ingrese un numero entero mayor que 0 y menor o igual que 1000.");
         

        }else{
          target.innerHTML = "<p>" +  this.RomanNumeralsService.arabicToRoman(parseInt(this.arabic));  + "</p>";

        }
        
        
      //} else {
      //  this.roman = '';
      //  let target = document.getElementById('result');
     // }
    
  }



}
