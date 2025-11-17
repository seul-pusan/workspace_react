import { atom } from "jotai";

export const todosAtom = atom([
    {id : '1', text:'Studying react', completed:false},
    {id : '2', text:'Studying NextJs', completed:false},
]);

export const completedAtom = atom((get) => {
    const todos = get(todosAtom);

    return todos.filter(todo => todo.completed).length
})

export const incompletedAtom = atom((get) => {
    const todos= get(todosAtom);

    return todos.filter(todo => !todo.completed).length
})