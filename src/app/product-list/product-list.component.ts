import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.view-btn-groups .btn').on('click', function(){
      $('.btn.active').removeClass('active');
      $('.view-btn-groups .btn').addClass('active');
    });
    $('.product-list-row').removeClass( 'list-view');
    $('.view-btn-groups .btn.grid-view-icon').on('click', function(){
      $('.product-list-row').removeClass( 'list-view');
    });
    $('.view-btn-groups .btn.list-view-icon').on('click', function(){
      $('.product-list-row').addClass( 'list-view');
    });
  }

}
