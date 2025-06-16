import { Car } from "@/types/car-type";
import Image from "next/image";

export default function CardGallery({car, currentImageIndex, handleImageChange,} : {
    car: Car;
    currentImageIndex: Record<number, number>;
    handleImageChange: (carId: number, direction: 'prev' | 'next') => void;
}) {

    const currentIdx = currentImageIndex[car.unique_id] || 0;
    const images = car.images?.image || [];
    const currentSrc = images[currentIdx] || '';
    return <>
    {images.length ? (
                <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
                    <button
                        onClick={() => handleImageChange(car.unique_id, 'prev')}
                        className="absolute mix-blend-difference text-gray-300 left-1 p-1 rounded-full text-xl font-bold z-10"
                    >
                        ◀
                    </button>
                    <Image
                        fill={true}
                        sizes="width-100vm"
                        src={currentSrc}
                        alt={`${car.mark_id} ${car.folder_id}`}
                        className="h-48 object-cover"
                    />
                    <button
                        onClick={() => handleImageChange(car.unique_id, 'next')}
                        className="absolute right-1 p-1 rounded-full mix-blend-difference text-gray-300 text-xl font-bold"
                    >
                        ▶
                    </button>
                </div>
                ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded mb-2 text-gray-500 text-sm">
                    Нет фото
                    </div>
                )}
            </>
}