import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carImage: CarImage[] = [];
  dataLoaded = false;
  constructor(
    private carDetailService: CarDetailService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarsByContent(params['carId']);
      this.getCarImages(params['carId']);
      this.dataLoaded = true;
    });
  }
  getCarsByContent(carId: number) {
    this.carDetailService.getCarsByContent(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarImages(carId: number) {
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.carImage = response.data;

      this.dataLoaded = true;
    });
  }
}
