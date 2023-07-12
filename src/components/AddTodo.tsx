// const AddTodo : any () => < h2> I am add todo  </h2>
"use client";
import { FormEvent, useState } from "react";
import { useTodos } from "@/store/todos";

export function AddTodo() {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  // thapa technical SUBSCRIBE

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddTodo(todo); // to add the data in an array
    setTodo("");
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full flex justify-between
    "
    >
      <input
        type="text"
        placeholder="Write your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="outline-none border-gray-400 border-b px-6"
      />
      <button type="submit" className="bg-gray-400 px-4 py-1 rounded-md">
        ADD
      </button>
    </form>
  );
}

export default AddTodo;
