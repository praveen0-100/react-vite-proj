import React from "react";
import tick from "../assets/tick.png";
import not_check from "../assets/remove.png";
import delete_icon from "../assets/bin.png";
const ToDo_items = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-cdnter cursor-pointer"
      >
        <img src={isComplete ? tick : not_check} alt="" className="w-8" />
        <p
          className={`text-slate-700 ml-4 text-[15px] 
    ${
      isComplete
        ? "bg-green-600 w-full text-white flex justify-center rounded-lg px-[1.5vw] py-2"
        : "bg-red-600 w-full text-white flex justify-center rounded-lg px-[1.5vw] py-2 flex-wrap"
    } 
    break-words overflow-hidden w-full h-full`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt=""
        className="w-6 cursor-pointer"
      />
    </div>
  );
};

export default ToDo_items;
