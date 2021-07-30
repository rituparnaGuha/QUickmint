import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  pageContent = {} ;
  page:string;
  title:string;

  constructor(
    private service: WebserviceService
  ) { }

  ngOnInit(){
    this.service.GetCms('about_us').subscribe(
      (data) => {
        console.log('about: ', data);
        this.page = (<any>data)["data"].pageContent;
        this.title = (<any>data)["data"].pageTitle;
        //this.userData = (<any>data)["data"]
      },
      (err) => {
        console.log(err);
      }
    );
    // const contentelement = document.getElementById('terms');
    //   contentelement.innerHTML = this.page;
    //   const titleelement: HTMLElement = document.getElementById('title2');
    //   titleelement.innerHTML = this.title;
  }

}
