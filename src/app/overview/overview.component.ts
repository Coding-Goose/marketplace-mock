import { Component, OnInit } from '@angular/core';
import {DataService, Product} from '../data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  data: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

}
