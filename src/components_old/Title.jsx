import React from "react";

const Title = ({title}) => {
  return (
    <div>
   <div className="w-700 h-20 m-0 bg-gray-300 flex justify-end">
  <button className="px-4 py-2 bg-primary-700 text-white rounded-md m-4 mr-2">Contact-us</button>
  <button className="px-4 py-2 bg-primary-700 text-white rounded-md m-4">About-us</button>

 </div>

    <div className="top flex justify-between items-center pb-6 px-6">
      <h1 className="text-3xl font-semibold ">{title}</h1>
    </div>
    </div>
  );
};

export default Title;
