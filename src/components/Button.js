import React from "react";

const Button = (props) => {
  return (
    <button className="bg-cyan-500 text-white p-2 px-3 m-4 mx-auto rounded hover:outline-none border-none outline-none hover:bg-cyan-600 font-semibold">
      {props.children}
    </button>
  );
};

export default Button;
