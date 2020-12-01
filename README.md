# WORKING WITH useContext + createContext REACT HOOKS
## When using useContext and createContext, you will not need to use the .Provider Component

* Please look at the comments in the code 

### OVERVIEW 
* Begin with changing the click event listener methods, which need conditions to listen for the specific button clicks to properly change the components state. 
```js
      //CREATE CONDITION ON THE CLICK LISTENER TO PROPERLY SET THE STATE
```

* You'll want to bring back the following code with empty strings:
```js
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
```
* You'll then import the useContext hook at HomePage + Duration compontents, and set up the method invokation like below: 
```js
//SET THE INPUT OBJECT EQUAL TO THE USE CONTEXT OBJECT
    let newUserInput, userInputCon;
    newUserInput = useContext(InputContext)
    userInputCon = inputs;
    newUserInput=userInputCon;
```

### More Questions? Book time @ [Queenscript Calendly](calendly.com/queenscript)