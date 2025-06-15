export interface Car {
  unique_id: number;
  mark_id: string;
  folder_id: string;
  price: number;
  images?: {
    image: string[];
  };
  modification_id: string;
  color: string;
  engine_type: string;
  year: string
}