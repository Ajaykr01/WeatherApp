import React from "react";

const Search = ({city, setCity, getData}) => {
  return (
    <div>
      <form
        onSubmit={getData}
        className="bg-gray-400 w-[30rem] h-12 flex justify-evenly items-center mt-5 rounded-3xl"
      >
        <input
          className="bg-transparent outline-none h-full w-[25rem] placeholder-white text-white"
          type="text"
          placeholder="Search City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass text-white cursor-pointer"></i>
      </form>
    </div>
  );
};

export default Search;
