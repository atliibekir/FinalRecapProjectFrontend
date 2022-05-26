import { CarImage } from "./carImage"

export interface CarDetail{
  id: number
  carId:number
  brandId:number
  colorId:number
  carName:string
  brandName:string
  colorName:string
  modelYear:number
  dailyPrice:number
  imagePath:CarImage[]
}
