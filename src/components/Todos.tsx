"use client";
import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";
import { FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

export const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  // console.log("params " + todosFilter);

  let filteredTodos = todos;

  if (todosFilter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (todosFilter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }
  const handleEditTodo = (todo) => {};
  return (
    <ul className="w-full flex flex-col gap-2">
      {filteredTodos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="flex justify-between w-full px-6 border-dashed border-b"
          >
            {/*Assigns a unique ID to the checkbox. The ID is created by concatenating the string "todo-" with the id property of the todo object.*/}
            <div>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => {
                  // console.log(todo.completed);
                  toggleTodoAsCompleted(todo.id);
                }}
              />

              <label
                htmlFor={`todo-${todo.id}`}
                className={`${todo.completed ? "text-blue-400 " : "null"}`}
              >
                {" "}
                {todo.task}
              </label>
            </div>
            <div className="flex gap-3 justify-between">
              {!todo.completed && (
                <button onClick={() => handleEditTodo(todo.id)}>
                  <FiEdit className="hover:text-blue-400 duration-300 cursor-pointer" />
                </button>
              )}
              {todo.completed && (
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <FiTrash className="hover:text-rose-500 duration-300 cursor-pointer" />
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
