export * from './Product';
export { ProductStatusEnum } from './enums';

export interface Pageable<T> {
  data: T[];
  total?: number;
  _limit: number;
  _page: number;
}
