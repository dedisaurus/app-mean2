import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TruckDetailComponent implements OnInit {

  truck ={};
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getTruckDetail(this.route.snapshot.params['id']);
  }

  getTruckDetail(id){
    this.http.get('/truck/'+id).subscribe(data => {
      this.truck = data;
    })
  }

  deleteTruck(id){
    this.http.delete('/truck/'+id)
    .subscribe(res=> {
      this.router.navigate(['/trucks']);
    }, (err) => {
      console.log(err);
      
    });
  }

}
