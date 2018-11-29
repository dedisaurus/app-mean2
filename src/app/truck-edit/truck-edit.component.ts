import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-edit.component.html',
  styleUrls: ['./truck-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TruckEditComponent implements OnInit {

  truck: any = {};
  constructor(private http: HttpClient, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTruckData(this.route.snapshot.params['id']);
  }

  getTruckData(id){
    this.http.get('/truck/'+id).subscribe(data=> {
      this.truck = data;
    });

  }

  updateTruck(id){
    this.http.put('/truck/'+id, this.truck)
    .subscribe(res => {
      let id = res['_id'];
      this.router.navigate(['/truck-details',id]);
    }, (err)=> {
      console.log(err);
      
    });
  }

}
