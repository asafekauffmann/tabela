import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
   selector: 'app-tabela',
   templateUrl: './tabela.component.html',
   styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnChanges {

   colunas: Array<string> = [];
   @Input() dados: Array<any> = [];
   /* { id: number, paciente: string, recepcao: string } */
   
   constructor() {

   }

   ngOnChanges(changes: SimpleChanges) {
      if(changes.dados) {
         const primeiroItem = this.dados[0];
         this.colunas = Object.getOwnPropertyNames(primeiroItem);

         console.log(this.colunas);
      }
   }

}
