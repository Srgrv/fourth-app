import React from "react";
import Collobarate from "../../components/Collobarate/Collobarate";

const Collobarates = (props) => {
  const friends = props.collobarates.map((item, index) => {
    return (
      <div key={index}>
        <Collobarate name={item.name} avatar={item.avatar} id={item.id} />
      </div>
    );
  });

  return <div>{friends}</div>;
};

export default Collobarates;
