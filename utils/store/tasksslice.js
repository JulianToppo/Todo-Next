const { createSlice } = require("@reduxjs/toolkit");

const tasksSlice= createSlice({
    name:'tasks',
    initialState:{
        tasks:[]
    },
    reducers:{
        addTask:(state,action)=>{
            const {task}=action.payload;
            state.tasks=[...state.tasks,task]
        },
        updatecompleted:(state,action)=>{
            const {item}=action.payload
            const newarray= state.tasks.map((elem)=>{
                if(elem.name==item.name && elem.description==item.description){
                    elem.completed=true;
                    return elem;
                }
                return elem
            })
        },
        deleteTask:(state,action)=>{
            const {item}=action.payload
            const newarray= state.tasks.filter((elem)=>{
                if(elem.name==item.name && elem.description==item.description){
                   
                    return
                }
                return elem
            })
            state.tasks=newarray
        }
    }
})
export const {addTask,updatecompleted,deleteTask}= tasksSlice.actions
export default tasksSlice.reducer