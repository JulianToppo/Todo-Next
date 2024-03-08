import React from "react";
import { useSelector } from "react-redux";

const Completed = (props) => {
  const { todoItems } = props;
  return (
    <div className="bg-green-400 bg-opacity-10 flex w-full h-svh items-center justify-center">
      <div className="flex flex-col w-1/2  bg-yellow-200 rounded-lg space-y-2 p-2">
        <h1 className="self-center font-medium text-xl">Tasks Completed:</h1>
        {todoItems &&
          todoItems.map((item) => {
            if (item.completed) {
              return <div className="bg-green-200 p-2 rounded-md" key={item._id}>{item.name}</div>;
            }
          })}
      </div>
    </div>
  );
};

export default Completed;
