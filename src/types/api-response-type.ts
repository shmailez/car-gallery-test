import { Car } from "./car-type";
import { Meta } from "./meta-type";

export interface ApiResponse {
  data: Car[];
  meta: Meta;
}