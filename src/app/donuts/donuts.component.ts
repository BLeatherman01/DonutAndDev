import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../services/donuts.service';
import { Donuts, Results } from '../interfaces/donuts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  results: Results[] = [];
  donutList: Donuts[] = [];

  constructor(private donutApi: DonutsService) { }

  ngOnInit(): void {
  this.getAllDonuts();
  }
 
  getAllDonuts() {
    this.donutApi.getDonuts().subscribe((result: Results)=>{   
     //think of this as pushing results into donutList array
      this.results.push(result) 
      this.getList();
    });
   
  }

  getList() {
    for(let i = 0; i < this.results[0].count; i++){
      this.donutList.push(this.results[0].results[i])
    }

    
  }
}
