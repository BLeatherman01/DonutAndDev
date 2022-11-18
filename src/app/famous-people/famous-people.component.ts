import { Component, OnInit } from '@angular/core';
import { Complete, FamousPeople } from '../interfaces/famous-people';
import { FamousPeopleService } from '../services/famous-people.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {
 results: FamousPeople [] = [];
 peopleList: Complete [] = [];

  constructor(private famousPeopleApi: FamousPeopleService ) { }

  ngOnInit(): void {
    this.getAllFamousPeople();
  }

  getAllFamousPeople(){
    this.famousPeopleApi.getFamousPeople().subscribe((result: FamousPeople )=>{
    this.results.push(result);
    this.getList();
    });
  }
  getList() {
     for(let i = 0; i < this.results[0].complete.length; i++){
       this.peopleList.push(this.results[0].complete[i])
     }

     console.log('people list', this.peopleList);
   }
}
