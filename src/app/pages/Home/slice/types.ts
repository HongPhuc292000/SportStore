import { Pageable, ProductI } from 'types';

/* --- STATE --- */
export interface HomeState {
  products?: Pageable<ProductI>;
}
