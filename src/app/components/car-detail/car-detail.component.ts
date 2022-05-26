import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[]=[];
  carImage:CarImage[]=[];
  currentCarDetail?:CarDetail;
  dataLoaded=false;

  constructor(private carDetailService:CarDetailService, private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId'])

      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])

      }else{
        this.getCarDetails()

      }
    })
  }
  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe((response=>{
      this.carDetails = response.data
      this.dataLoaded=true;
    }));
  }
  getCarsByBrand(brandId: number) {
    this.carDetailService.getCarsByBrand(brandId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carDetailService.getCarsByColor(colorId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCarDetail(carDetail:CarDetail){
    this.currentCarDetail = carDetail;
  }
  setDeletedCurrentCarDetail(){
    this.currentCarDetail =undefined;
  }
  getCurrentCarDetailClass(carDetail:CarDetail){
    if(carDetail == this.currentCarDetail){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
  getAllCarDetailClass(){
    if(!this.currentCarDetail){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
