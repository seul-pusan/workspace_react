export default function TailSelect({ id, title, opk, opv, onHandle, selRef }) {
  const isKey = id === "sel2" || id === "sel4";
  return (
    <div className="flex flex-col">
      <label htmlFor={id}
             className="mb-2 text-sm font-semibold text-gray-700 tracking-tight">
             {title}
      </label>

      <select id={id}
              ref={selRef}
              onChange={onHandle}
              className="block w-full p-2.5 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2
                    focus:ring-purple-400 focus:border-purple-400 transition duration-150 ease-in-out">
        <option value="">--{title} 선택 --</option>
        {
          opk.map((op, idx) => <option key={op} value={isKey ? opv[idx] : op}>
                                {isKey ? op : opv[idx]}
                               </option>)
        }
      </select>
    </div>
  );
}
