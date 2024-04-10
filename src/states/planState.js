import { create } from "zustand";

export const useTodosStore=create((set)=>({
    todos:[{
        id:"1",
        day:"Pazartesi",
        plan:"Spora git",
        date:null
    }],
    addTodo:item=>set(state=>({
        todos:[...state.todos,item]
    })),
    removeTodo:id=>set(state=>{
        let newTodos=state.todos.filter(item=>item.id!==id)
        return{
            todos:newTodos
        }
    })
}))