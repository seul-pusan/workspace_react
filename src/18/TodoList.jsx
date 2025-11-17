import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { useAtomValue } from "jotai"
import { todosAtom, completedAtom, incompletedAtom } from "./atomsTodo";

export default function TodoList() {
    const todos = useAtomValue(todosAtom);
    const completed = useAtomValue(completedAtom);
    const incompleted = useAtomValue(incompletedAtom);

    return (
        <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
            <h1 className="text-3xl font-extrabold text-center mb-4">
                ✅ 할 일 목록
            </h1>

            <div className="flex justify-center items-center text-gray-700 mb-6 space-x-3 text-sm sm:text-base">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                    전체: {todos.length}개
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    완료: {completed}개
                </span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                    미완료: {incompleted}개
                </span>
            </div>

            <div className="mb-6">
                <TodoInput />
            </div>

            <div className="flex flex-col space-y-3">
                {todos.length === 0 ? (
                    <p className="text-center text-gray-400 italic">
                        아직 등록된 할 일이 없습니다 ✨
                    </p>
                ) : (
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    ))
                )}
            </div>
        </div>
    )
}
