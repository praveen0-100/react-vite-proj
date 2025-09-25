import React, { useState,useEffect, useRef } from "react";
import to_do from "../assets/to_do.png";
import ToDo_items from "./ToDo_items";

const ToDo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef = useRef();
  const add = () => {
    const inpText = inputRef.current.value.trim();

    if (inpText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inpText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList))
  },[todoList])

  
  
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* --- title--- */}
      <div className="flex items-center mt-5 gap-3">
        <img className="w-8" src={to_do} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      {/* input box */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your Tasks"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 font-semibold text-white text-lg cursor-pointer"
        >
          ADD +
        </button>
      </div>
      {/* To Do items */}
      <div>
        {todoList.map((items, index) => {
          return (
            <ToDo_items
              key={index}
              text={items.text}
              id={items.id}
              isComplete={items.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
