import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RollViewModel } from 'src/app/models/roll-view-model';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { RollService } from 'src/app/services/admin/roll.service';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent implements OnInit {
  rolls:  RollViewModel[] = [];
   //Properties for Paging
   currentPageIndex: number = 0;
   pages: any[] = [];
   pageSize: number = 2;

    //Sorting
 sortBy: string = "RollName";
 sortOrder: string = "ASC"; //ASC | DESC

  constructor(public rollservice: RollService) { }

  ngOnInit() {
    this.rollservice.getAllProjects().subscribe(
      (response: RollViewModel[]) => {
        this.rolls = response;
        this.calculateNoOfPages();
      }
    );
  }

  calculateNoOfPages() {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.rolls).length / this.pageSize);
    this.pages = [];

    //Generate pages
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({ pageIndex: i });
    }

    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length) {
      this.currentPageIndex = ind;
    }
  }

  onDeleteClick(event, roll: RollViewModel) {
    
  }
}
