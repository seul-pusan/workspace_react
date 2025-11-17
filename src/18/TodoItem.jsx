import TailButton from "../Components/TailButton";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { todosAtom } from "./atomsTodo";
import React from "react";

export default function TodoItem({ todo }) {
    const setTodos = useSetAtom(todosAtom); // ✅ useSetAtom으로 수정
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleToggle = () => {
        setTodos(prev =>
            prev.map(t =>
                t.id === todo.id ? { ...t, completed: !todo.completed } : t
            )
        );
    };

    const handleSave = () => {
        setTodos(prev =>
            prev.map(t =>
                t.id === todo.id ? { ...t, text: editText } : t
            )
        );
        setIsEdit(false);
    };

    const handleCancel = () => {
        setIsEdit(false);
        setEditText(todo.text);
    };

    const handleDelete = () => {
        setTodos(prev => prev.filter(t => t.id !== todo.id));
    };

    return (
        <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center gap-3 flex-1">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggle}
                    className="w-5 h-5 accent-indigo-500 cursor-pointer"
                />

                {isEdit ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                ) : (
                    <span
                        className={`flex-1 text-gray-800 text-base ${todo.completed
                                ? "line-through text-gray-400 italic"
                                : ""
                            }`}
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-2 ml-4">
                {isEdit ? (
                    <>
                        <TailButton
                            color="purple"
                            caption="저장"
                            onHandle={handleSave}
                        />
                        <TailButton
                            color="slate"
                            caption="취소"
                            onHandle={handleCancel}
                        />
                    </>
                ) : (
                    <>
                        <TailButton
                            color="blue"
                            caption="수정"
                            onHandle={() => setIsEdit(true)}
                        />
                        <TailButton
                            color="slate"
                            caption="삭제"
                            onHandle={handleDelete}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
