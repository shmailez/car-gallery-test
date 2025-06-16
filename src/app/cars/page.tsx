import { Suspense } from "react";
import CarsContent from "./cars-conten";

export default function CarsPage() {
    return <>
        <Suspense fallback={<p>Загрузка...</p>}>
            <CarsContent/>
        </Suspense>
    </>
}