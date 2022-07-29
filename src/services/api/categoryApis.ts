import axiosClient from './axios';

const categoryApis = {
  async getListCategories(params?: any) {
    return await axiosClient.get('/categories', { params });
  },
};

export default categoryApis;
