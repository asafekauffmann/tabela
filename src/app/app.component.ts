import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   dados: Array<{ id: number, paciente: string, recepcao: string }> = [];

   constructor() {
      this.dados = [
         {
            "id": 1,
            "paciente": "Martin",
            "recepcao": "12/06/2021"
         },
         {
            "id": 2,
            "paciente": "Lenny",
            "recepcao": "17/05/2020"
         }
      ];
   };

}
