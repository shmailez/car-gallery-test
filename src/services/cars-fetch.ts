import { ApiResponse } from '@/types/api-response-type';

export const fetchCarsApi = async (page: number, sort: string): Promise<ApiResponse> => {
  const params = new URLSearchParams({
    _limit: '12',
    _page: page.toString(),
  });

  if (sort === 'asc' || sort === 'desc') {
    params.append('_sort', 'price');
    params.append('_order', sort);
  }

  const res = await fetch(`https://testing-api.ru-rating.ru/cars?${params.toString()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch cars');
  }

  return res.json();
};