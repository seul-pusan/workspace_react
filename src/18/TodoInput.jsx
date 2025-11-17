import TailButton from "../Components/TailButton"
import { useSetAtom } from "jotai"
import { todosAtom } from "./atomsTodo"
import { useRef } from "react"

export default function TodoInput() {
  const setTodos = useSetAtom(todosAtom);
  const inRef = useRef();

  const handleAdd = () => {
    const value = inRef.current.value.trim();

    if (value === "") {
      alert("할 일을 입력하세요 📝");
      inRef.current.focus();
      return;
    }

    const newItem = {
      id: Date.now(),
      text: value,
      completed: false,
    };

    setTodos(prev => [newItem, ...prev]);
    inRef.current.value = "";
    inRef.current.focus();
  };

  return (
    <div className="flex items-center gap-3 w-full mt-6 mb-4">
      <input
        type="text"
        ref={inRef}
        placeholder="할 일을 입력하세요..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400
                   placeholder-gray-400 text-gray-800"
      />
      <TailButton
        color="purple"
        caption="추가"
        onHandle={handleAdd}
      />
    </div>
  );
}
