import React from "react";
import { useSelector } from "react-redux";

const Completed = (props) => {
  const { todoItems } = props;
  return (
    <div className="bg-green-400 flex w-full h-svh items-center justify-center">
      <div className="flex flex-col w-1/2 p-7 bg-yellow-200 rounded-lg">
        {todoItems &&
          todoItems.map((item) => {
            if (item.completed) {
              return <li key={item._id}>{item.name}</li>;
            }
          })}
      </div>
    </div>
  );
};

export default Completed;
