import React from "react";

const Error = ({error}) => {
  return (
    <div className="error-container mt-10 flex flex-col items-center">
      <img
        src="src/assets/images/notFound.png"
        alt="Error msg"
        className="error-image w-[30rem]"
      />
      <p className="text-white mt-4 text-center text-3xl">{error}</p>
    </div>
  );
};

export default Error;
