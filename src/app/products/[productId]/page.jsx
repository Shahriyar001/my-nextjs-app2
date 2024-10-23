import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(params);
  return (
    <div>
      <h1>DynamicPage{params.productId}</h1>
    </div>
  );
};

export default DynamicPage;
