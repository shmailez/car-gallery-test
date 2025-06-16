export default function SortSelect({sort, handleSortChange} : {
    sort: string;
    handleSortChange : React.ChangeEventHandler<HTMLSelectElement>;
}) {
    return <>
    <div className="mb-4 bg-white p-4 rounded-[10px]">
        <label className="mr-2 font-medium text-blue-700">Сортировка по цене:</label>
        <select value={sort} onChange={handleSortChange} className="text-blue-700 p-2 rounded">
          <option value="">Не выбрана</option>
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </div>
    </>
}