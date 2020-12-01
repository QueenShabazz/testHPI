import React, {createContext} from "react";

const InputContext = createContext({
  display: false,
  symptoms: "",
  Durations:"",
  Qualities:"",
  Radiations:"",
  AssSymps:"",
  Pallatives:"",
  Provocatives:"",
  Quantities: "",
});

export default InputContext;
// import React from 'react'
// const InputContext = React.createContext({})
// export const InputProvider = InputContext.Provider
// export default InputContext
