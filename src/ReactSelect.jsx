import { maxWidth } from "@mui/system";
import React, { useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const data = ["اتصالات", "فودافون", "موبينيل"];
const options = [
  { value: "اتصالات", label: "اتصالات" },
  { value: "فودافون", label: "فودافون" },
  { value: "موبينيل", label: "موبينيل" },
];

export default function AnimatedMulti({
  selectedServices,
  setSelectedServices,
}) {
  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    console.log(inputValue);
    return inputValue;
  };
  const style = {
    select: {
      width: "100%",
      maxWidth: 600,
    },
  };
  return (
    
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={setSelectedServices}
        //onInputChange={handleInputChange}
        placeholder="بحث"
        // styles={style.select}
      />
  );
}
