import { ListResponseModel } from './../models/listResponseModel';
import { CarImage } from './../models/carImage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl='https://localhost:44361/api/'
  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number): Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'carimages/getbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
