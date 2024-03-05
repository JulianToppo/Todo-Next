import React from 'react';
import { useSelector } from 'react-redux';

const Completed = () => {
  const taskstore = useSelector((store)=>store.tasks);

  return (
    <>
      {taskstore.tasks && taskstore.tasks.map((item) => {
        if (item.completed) {
          return <p key={item.id}>{item.name}</p>;
        }
        return null;
      })}
    </>
  );
};

export default Completed;
