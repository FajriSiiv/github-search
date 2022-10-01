import React from "react";

const Error = ({ error }) => {
  return (
    <div className="min-h-[20rem] flex justify-center items-center">
      <h1 className="text-2xl font-bold text-center">{error} Github User!</h1>
    </div>
  );
};

export default Error;
