import { ProductStatusEnum } from './enums';

export interface ProductI {
  id: string;
  imageUrl: string;
  name: string;
  rating: number;
  code: string;
  defaultPrice: number;
  salePrice: number;
  salePercent: number;
  status: ProductStatusEnum;
  categoryId: string;
  totalRating: number;
}
