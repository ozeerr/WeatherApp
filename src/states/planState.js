import { create } from "zustand";

export const useTodosStore=create((set)=>({
    todos:[{
        id:"1",
        day:"PZT",
        plan:"Spora git",
        date:new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear()+"-"+new Date().getHours()+":"+new Date().getMinutes()
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