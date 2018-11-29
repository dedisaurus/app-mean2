import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-truck-create',
  templateUrl: './truck-create.component.html',
  styleUrls: ['./truck-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TruckCreateComponent implements OnInit {

  truck ={};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveFoodtruck(){
    this.http.post('/truck', this.truck)
    .subscribe(res => {
      let id = res['_id'];
      this.router.navigate(['/truck-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
