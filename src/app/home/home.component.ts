import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
//import { NgxMaterialRatingModule } from 'ngx-material-rating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorylisting: any;
  providerlisting: any;
  galleryData:any;
  offerGallery:any;
  popularServiceList:any;
  rating:number
  
  offers : any[] = [];
  banners = [
    {
      heading: "What service are you looking for..",
    subHeading: "Search from 25 awesome verified services!",
    buttonLink: "*",
      buttonText: "Book Now!",
      image: "assets/images/banner.png"
    }
];


  constructor(
    public service: WebserviceService,
    public ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.getBanner();
    this.getOffer();
    this.service.categorylisting().subscribe(
      (data) => {
        console.log("categorylisting: ", data);
        this.categorylisting = (<any>data)["data"];
        // this.toastr.success((<any>data)["message"]);

        // this.router.navigate(['/login'])
      },
      (err) => {
        console.log(err);
      }
    );

    this.service.PopularServiceList().subscribe(
      (data:any) => {
        this.popularServiceList = data.data;
        console.log("popularServiceList: ", this.popularServiceList);
        // this.toastr.success((<any>data)["message"]);

        // this.router.navigate(['/login'])
      },
      (err) => {
        console.log(err);
      }
    );

    this.service.topServiceList().subscribe(
      (data) => {
        console.log("topServiceList: ", data);
        this.providerlisting = (<any>data)["data"];
        // this.toastr.success((<any>data)["message"]);

        // this.router.navigate(['/login'])
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getBanner() {
    this.service.getBanner().subscribe((resp:any) => {
      this.banners = resp.data
      console.log("this.banner: ", this.offers);
      this.galleryData = this.banners.filter((item: { image: any; }) => item.image === null);
      this.ref.detectChanges()
    })
  }

  getOffer(){
    this.service.getOffer().subscribe((resp:any) => {
      this.offers = resp.data
      console.log("this.offer: ", this.offers);
      this.offerGallery = this.offers.filter((item: { image: any; }) => item.image === null);
      //this.ref.detectChanges()
    })
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    margin:16,
    dots: false,
    navSpeed: 300,
    navText: ['<img src="assets/images/arrow-prev.png">', '<img src="assets/images/arrow-next.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  popularOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin:16,
    navSpeed: 300,
    navText: ['<img src="assets/images/arrow-prev.png">', '<img src="assets/images/arrow-next.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
}
