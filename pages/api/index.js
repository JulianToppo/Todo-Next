

export async function addTodoFunc(formObj) {
    try {
      const response = await fetch(`/api/addtodo`, {
        method: "POST",
        body: JSON.stringify(formObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }
  
  export async function deleteTodoFunc(id) {
    try {
      console.log("delete functuion called",id)
      const response = await fetch(`/api/deletetodo?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete todo: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }
  
  export async function updateTodoFunc(id, formObj) {
    try {
      const response = await fetch(`/api/updatetodo?id=${id}`, {
        method: "PUT",
        body: JSON.stringify(formObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }
  
  export async function fetchTodoItems() {
    try {
      const response = await fetch(`/api/gettodo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.message);
      return data.message
    } catch (error) {
      console.error("Error fetching todo items:", error);
      return [];
    }
  }
  