import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complete, FamousPeople } from '../interfaces/famous-people';
import { FamousPeopleService } from '../services/famous-people.service';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css'],
})
export class FamousPersonDetailComponent implements OnInit {
  famousPerson: Complete = {} as Complete;
 
  constructor(
    private famousPeopleService: FamousPeopleService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const i: any =
      this._Activatedroute.snapshot.paramMap.get('i');
    this.getFamousPeople(i);
   
  }

  getFamousPeople(i: any) {
    this.famousPeopleService.getFamousPeople().subscribe((ff: FamousPeople) => {
      this.famousPerson = ff.complete[i];
    });
  }
}
