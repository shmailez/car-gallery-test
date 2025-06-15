import { useEffect, useState } from 'react';
import { Car } from '@/types/car-type'
import { Meta } from '@/types/meta-type'
import { fetchCarsApi } from '@/services/cars-fetch';

export const useCars = (page: number, sort: string) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null | unknown>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchCarsApi(page, sort);
        setCars(data.data);
        setMeta(data.meta);
      } catch (error: unknown) {
        setError(error || 'Ошибка при загрузке данных');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, sort]);

  return { cars, meta, loading, error};
};