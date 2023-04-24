import React from "react";
import Collobarate from "../../components/Collobarate/Collobarate";

const Collobarates = (props) => {
  console.log(props);

  const friends = props.collobarates.map((item, index) => {
    return (
      <div key={index}>
        <Collobarate name={item.name} avatar={item.avatar} />
      </div>
    );
  });

  return (
    <div>
      {friends}
      {/* <Collobarate />
      <Collobarate />
      <Collobarate />
      <Collobarate />
      <Collobarate />
      <Collobarate /> */}
      {/* <Collobarate />
      <Collobarate /> */}
    </div>
  );
};

export default Collobarates;
