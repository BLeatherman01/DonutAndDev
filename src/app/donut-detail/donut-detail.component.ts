import { Component, Input, OnInit } from '@angular/core';
import { DonutsDetail } from '../interfaces/donut-detail';
import { DonutsService } from '../services/donuts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
  // Create a new variable called donutToDisplay that is an object of type DonutsDetail
  donutToDisplay: DonutsDetail = {} as DonutsDetail;

  // creating a new variable for a new array that holds objects of type DonutsDetail
  // donutsArray: DonutsDetail[] = [];

 constructor(private donut: DonutsService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    const donutId: any = this._Activatedroute.snapshot.paramMap.get('id');
    this.displayDetails(donutId);
  }

  displayDetails(donutId: string ){
    this.donut.getDonutDetail(donutId).subscribe((dd:DonutsDetail)=>{
      this.donutToDisplay = dd;
    })
  }
}
