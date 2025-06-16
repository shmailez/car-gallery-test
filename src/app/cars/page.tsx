import { Suspense } from "react";
import CarsContent from "./cars-conten";

export default function CarsPage() {
    return <>
        <Suspense fallback={<p className="text-white center">Загрузка...</p>}>
            <CarsContent/>
        </Suspense>
    </>
}