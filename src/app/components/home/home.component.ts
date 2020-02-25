import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];

  constructor(private Apiservice : ApiService) { }

  ngOnInit(){
    this.getProductList();
   
    }

    getProductList(){
    this.Apiservice.sendGetRequest().subscribe((res: HttpResponse<any>)=>{  
      console.log(res);  
      this.products = res.body;  
    })  
  }

    public firstPage() {
      this.products = [];
      this.Apiservice.sendGetRequestToUrl(this.Apiservice.first).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }
    public previousPage() {
  
      if (this.Apiservice.prev !== undefined && this.Apiservice.prev !== '') {
        this.products = [];
        this.Apiservice.sendGetRequestToUrl(this.Apiservice.prev).subscribe((res: HttpResponse<any>) => {
          console.log(res);
          this.products = res.body;
        })
      }
  
    }
    public nextPage() {
      if (this.Apiservice.next !== undefined && this.Apiservice.next !== '') {
        this.products = [];
        this.Apiservice.sendGetRequestToUrl(this.Apiservice.next).subscribe((res: HttpResponse<any>) => {
          console.log(res);
          this.products = res.body;
        })
      }
    }
    public lastPage() {
      this.products = [];
      this.Apiservice.sendGetRequestToUrl(this.Apiservice.last).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }

}
