import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  level = 0
  category_id: any;
  subcategorylisting: any;
  breadcrumbs = [];
  providersList: any = null;
  url: any;
  baseUrl: any;
  constructor(
    private route: ActivatedRoute,
    public service: WebserviceService,
    public router: Router,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.category_id = event.id;
      console.log(this.category_id)
      this.getSubcategories()
    });
  }

  getSubcategories() {
    this.service.subcategorylisting(this.category_id).subscribe(
      (data: any) => {
        console.log('subcategory',data);
        if (data.count > 0) {
          this.subcategorylisting = (<any>data)["data"];
          this.level = 1
        } else {
          let nav: NavigationExtras = {
            state: {
              data: data,
              type: "none"
            }
          }
          this.router.navigate(['service-provider-list'], nav)
        }
        },
      (err) => {
        console.log(err);
      }
    );
  }

  async getProviders(data: any) {
    //console.log("getProviders", data)
    console.log("level: ", this.level)
    if(this.level == 1) {
      // check if any subcat
      // yes, change level to 2, call subcatTwo
      // no, sp list TrainingProviders

      // 1
      this.service.getsubcategorylistingOne(data._id).subscribe((resp:any) => {
   // console.log("level getsubcategorylistingOne: ", this.level)
        console.log(resp)
      // 2
        if (resp.count > 0) {
          this.level = 2
    console.log("leveeeeel: ", this.level)

          this.subcategorylisting = resp.data
        }
        // 3
        else {
          let nav: NavigationExtras = {
            state: {
              data: data,
              type: "level 0"
            }
          }
          this.router.navigate(['service-provider-list'], nav)
        }
      })
    } else if (this.level == 2) {
      // check if any subcat
      // yes, change level to 3, call ???
      // no, sp list SubjectProviders
      this.service.getsubcategorylistingTwo(data._id).subscribe((resp:any) => {
        console.log("level getsubcategorylistingTwo: ", this.level)
            console.log(resp)
          // 2
            if (resp.count > 0) {
              this.level = 3
              this.subcategorylisting = resp.data
            }
            // 3
            else {
              let nav: NavigationExtras = {
                state: {
                  data: data,
                  type: "level 1"
                }
              }
              this.router.navigate(['service-provider-list'], nav)
            }
          })


    } else if (this.level == 3) {
      let nav: NavigationExtras = {
        state: {
          data: data,
          type: "level 2"
        }
      }
      this.router.navigate(['service-provider-list'], nav)
    }
    }
    }
  