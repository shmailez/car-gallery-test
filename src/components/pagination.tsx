import { Meta } from "../types/meta-type";

export default function Pagination({ meta, handlePageChange }: {
  meta: Meta;
  handlePageChange: (page: number) => void;
}) {
    return <>
        {meta && meta.last_page > 1 && (
            <div className="flex justify-center mt-6 flex-wrap gap-2 text-gray-700">
                <button
                    disabled={meta.page === 1}
                    onClick={() => handlePageChange(meta.page - 1)}
                    className="px-3 py-1 rounded bg-white disabled:opacity-50"
                >
                Назад
                </button>
                {Array.from({ length: meta.last_page }, (_, i) => i + 1)
                .filter((p) =>
                    p === 1 || p === meta.last_page || (p >= meta.page - 2 && p <= meta.page + 2)
                )
                .map((p, _, arr) => {
                    const prev = arr[arr.indexOf(p) - 1];
                    const showDots = prev && p - prev > 1;
                    return (
                    <span key={p} className="flex">
                        {showDots && <span className="px-2">...</span>}
                        <button
                        onClick={() => handlePageChange(p)}
                        className={`px-3 py-1 rounded ${
                            p === meta.page ? 'bg-blue-600 text-white' : 'bg-white'
                        }`}
                        >
                        {p}
                        </button>
                    </span>
                    );
                })}
            <button
                disabled={meta.page === meta.last_page}
                onClick={() => handlePageChange(meta.page + 1)}
                className="px-3 py-1 rounded bg-white disabled:opacity-50"
            >
            Вперёд
            </button>
        </div>
        )}
    </>
}