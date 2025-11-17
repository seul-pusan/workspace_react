import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
// import { useAtomValue } from "jotai"
// import { todosAtom, completedAtom, incompletedAtom } from "./atomsTodo";
import { useState, useEffect } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState(0);
    const [incompleted, setInCompleted] = useState(0);

    // console.log(todos)

    useEffect(() => {
        // const newItem = [{
        //     id:1,
        //     text: "Studying react",
        //     completed: false
        // }];

        // //자바스크립트 -> 문자열: JSON.stringify()
        // localStorage.setItem("todo", "Studying react");

        //문자열 -> 자바스크립트 객체: JSON.parse()
        // const todos = JSON.parse(localStorage.getItem("todo"));
        // console.log(todos[0].text)
    }, []);

    //초기 로드 시 localStorage에서 불러오기
    useEffect(() => {
        const stored = localStorage.getItem("todos");
        if (stored) setTodos(JSON.parse(stored));
    }, [])

    //todos 변경될 때마다 localStorage 업데이트
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        const done = todos.filter((t) => t.completed).length;
        setCompleted(done);
        setInCompleted(todos.length - done);
    }, [todos]);

    //항목 추가
    const handleAdd = (text) => {
        const newItem = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos((prev) => [newItem, ...prev]);
    }

    //항목 토글
    const handleToggle = (id) => {
        setTodos((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t));
    };

    //항목 수정
    const handleEdit = (id, newText) => {
        setTodos((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, text: newText } : t));
    };

    //항목 삭제
    const handleDelete = (id) => {
        setTodos((prev) =>
            prev.filter((t) =>
                t.id !== id));
    };

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
                <TodoInput onAdd={handleAdd} />
            </div>

            <div className="flex flex-col space-y-3">
                {todos.length === 0 ? (
                    <p className="text-center text-gray-400 italic">
                        등록된 할 일이 없습니다 💎
                    </p>
                ) : (
                    todos.map(todo => (
                        <TodoItem key={todo.id}
                            todo={todo}
                            onToggle={handleToggle}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </div>
        </div>
    )
}
