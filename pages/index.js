import Homepage from "../components/home";
import {
  addTodoFunc,
  deleteTodoFunc,
  updateTodoFunc,
  fetchTodoItems,
} from "./api";

export default function Home(props) {
  return (
    <Homepage
      todoItems={props.todoItems}
      addTodoFunc={addTodoFunc}
      deleteTodoFunc={deleteTodoFunc}
      updateTodoFunc={updateTodoFunc}
      fetchTodoItemsFunc={fetchTodoItems}
    />
  );
}

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
