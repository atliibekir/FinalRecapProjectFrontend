import { BrandService } from 'src/app/services/brand.service';
import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand?:Brand;
  dataLoaded = false;

  constructor(private brandSerivce: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandSerivce.getBrand().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  setDeletedCurrentBrand(){
    this.currentBrand =undefined;
  }
  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}