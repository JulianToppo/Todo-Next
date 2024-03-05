const { configureStore } = require("@reduxjs/toolkit");
import tasksslice from "./tasksslice";

const store= configureStore({
    reducer:{
        'tasks':tasksslice
    }
})

export default store