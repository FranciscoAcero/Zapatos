import React from "react";
import Card from "../Card/Card";
import zapatosData from "../../data/zapato.json";

const ShoeList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {zapatosData.map((shoe) => (
        <Card key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;