import React from "react";

function CityDate({ data }) {
  return (
    <div className="flex items-center justify-between h-10 w-[29rem] relative top-5">
      <div className="flex">
        <i className="fa-solid fa-location-dot relative top-1 text-xl text-white"></i>
        <h2 className="relative left-1 text-lg font-bold text-white">
          {data?.city?.name}
        </h2>
      </div>
      <div>
        <p className="text-lg font-bold text-white">
          {new Date(data.list[0].dt * 1000).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default CityDate;
