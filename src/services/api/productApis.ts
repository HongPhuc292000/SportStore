import axiosClient from './axios';

const productApis = {
  async getListProducts(params?: any) {
    return await axiosClient.get('/products', { params });
  },
};

export default productApis;
