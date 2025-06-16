"use client";

import Pagination from '@/components/pagination';
import ProductCard from '@/components/product-card';
import SortSelect from '@/components/sort-select';
import { useCars } from '@/hooks/use-cars';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function CarsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') || '1');
  const sort = searchParams.get('sort') || '';

  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const { cars, meta, loading, error } = useCars(page, sort);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const query = new URLSearchParams(searchParams.toString());
    if (newSort) query.set('sort', newSort);
    else query.delete('sort');
    query.set('page', '1');
    router.push(`/cars?${query.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const query = new URLSearchParams(searchParams.toString());
    query.set('page', newPage.toString());
    router.push(`/cars?${query.toString()}`);
  };

  const handleImageChange = (carId: number, direction: 'prev' | 'next') => {
    setCurrentImageIndex((prev) => {
      const current = prev[carId] || 0;
      const imagesCount = cars.find((car) => car.unique_id === carId)?.images?.image?.length || 1;
      let newIndex = direction === 'prev' ? current - 1 : current + 1;
      if (newIndex < 0) newIndex = imagesCount - 1;
      if (newIndex >= imagesCount) newIndex = 0;
      return { ...prev, [carId]: newIndex };
    });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">Каталог автомобилей</h1>
      <SortSelect sort={sort} handleSortChange={handleSortChange}/>
      {
      error ? (
    <p className="text-red-500">Ошибка при загрузке данных</p>
  ) : loading ? (
        <p className="text-white center">Загрузка...</p>
         
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cars.map((car) => (
                        <ProductCard
                            key={car.unique_id}
                            car={car}
                            currentImageIndex={currentImageIndex}
                            handleImageChange={handleImageChange}
                        />
                        ))}
        </div>
      )}
      {meta && <Pagination meta={meta} handlePageChange={handlePageChange} />}
    </div>
  );
}