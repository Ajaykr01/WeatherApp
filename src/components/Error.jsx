import React from "react";

const Error = ({ data }) => {
  return (
    <div className="error-container mt-10 flex flex-col items-center">
      <img
        src="public/notFound.png"
        alt="Error msg"
        className="error-image w-[30rem]"
      />
      <p className="text-white mt-4 text-center text-3xl">
        {data?.message || "An error occured"}
      </p>
    </div>
  );
};

export default Error;
