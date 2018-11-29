import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {

  foodtrucks: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/truck').subscribe(data => {
      this.foodtrucks = data;
    });
  }

}
