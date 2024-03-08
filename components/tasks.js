import { deleteTask } from "@/utils/store/tasksslice";
import { addTask, updatecompleted } from "@/utils/store/tasksslice";
import React from "react";
import { useState, useRef } from "react";

const Tasks = (props) => {
  const {
    todoItems,
    addTodoFunc,
    deleteTodoFunc,
    updateTodoFunc,
    fetchTodoItemsFunc,
  } = props.propsfunction;

  const [task, settask] = useState(false);
  const [todoItemsList, setTodoItemsList] = useState(todoItems);
  const taskname = useRef();
  const taskdescription = useRef();

  const getData = async () => {
    const items = await fetchTodoItemsFunc();
    const formatteditems = items.map((item) => ({
      _id: item._id.toString(),
      name: item.name,
      desc: item.description,
      completed: item.completed,
    }));
    setTodoItemsList(formatteditems);
  };
  const onAddSubmit = async (e) => {
    e.preventDefault();
    const name = taskname.current.value;
    const desc = taskdescription.current.value;

    const formobj = {
      name: name,
      description: desc,
      completed: false,
    };

    console.log(formobj);

    await addTodoFunc(formobj);
await getData();
    
  };

  const markcompleted = async (item) => {
    await updateTodoFunc(item._id);  
    await getData();
  };

  const markdelete = async (item) => {
    await deleteTodoFunc(item._id);
    await getData();
    
  
  };
  return (
    <div className="flex h-full items-start pt-12 justify-center">
      <div className="bg-blue-200 w-4/6 flex items-center rounded-md justify-center p-4">
        <div className="flex flex-col w-full space-y-3 ">
          <h1 className="text-2xl font-semibold">Today</h1>

          <div className="flex flex-col">
            {todoItemsList.map((item) => {
              return  (!item.completed &&
                <div className="flex flex-row justify-around" key={item._id}>
                  <div className="flex w-1/2 ">
                    {" "}
                    <div
                      className="border-red-400 border-2 p-2 rounded-full w-1 h-1 bg-white hover:border-green-500 hover:bg-green-300"
                      onClick={(e) => {
                        e.preventDefault();
                        markcompleted(item);
                      }}
                    ></div>
                    <p>{item.name}</p>
                    <p>{item.completed.toString()}</p>
                  </div>
                  <div className="flex w-1/2 justify-end ">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        markdelete(item);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white">
            {!task && (
              <p className="mx-4 p-2" onClick={() => settask(!task)}>
                Add Task
              </p>
            )}
            {task && (
              <div className="flex flex-col space-x-2 space-y-3 p-2 border-solid border border-gray-500 rounded-md">
                <input
                  ref={taskname}
                  className="font-medium"
                  type="text"
                  placeholder="Task name"
                  required
                ></input>
                <input
                  type="text"
                  ref={taskdescription}
                  placeholder="Description"
                  required
                ></input>
                <div className="flex justify-end p-4">
                  <button
                    className="bg-white px-5"
                    onClick={() => settask(!task)}
                  >
                    Cancel
                  </button>
                  <button className="bg-red-200 px-5 p-3" onClick={onAddSubmit}>
                    Add Task
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
