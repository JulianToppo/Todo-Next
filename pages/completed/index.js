import Completed from "@/components/completed";
import Header from "@/components/header";
import React from "react";

const index = (props) => {
  
  return (
    <React.Fragment>
      <Header />
      <Completed todoItems={props.todoItems}/>
    </React.Fragment>
  );
};

export default index;

export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.URL}/api/gettodo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const todoItems = await response.json();
   
    const formattedTodoItems = todoItems.message.map((item) => ({
      _id: item._id.toString(),
      name: item.name,
      desc: item.description,
      completed: item.completed,
    }));
    
    return {
      props: {
        todoItems: formattedTodoItems,
      },
    
    };
  } catch (error) {
    console.error("Error fetching todo items:", error);
    return {
      props: {
        todoItems: [],
      },
    
    };
  }
}