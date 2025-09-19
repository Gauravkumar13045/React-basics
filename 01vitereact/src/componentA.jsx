/* useContext()  React Hook that allows you to share values
               between multiple levels of components 
               without passing props through each level

PROVIDER COMPONENT
       1. import { createContext } from "react";
       2. const MyContext = createContext();
       3. <MyContext.provider value={value}>
          {children}
          </MyContext.provider>

CONSUMER COMPONENT
       1. import React, { useContext } from "react";
       2. import { MyContext } from "./App";
       3. const value = useContext(MyContext); */

import React, { useState, createContext } from 'react';
import ComponentB from './componentB.jsx';

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Gaurav");
    return (
    <div className="box">
        <h2>Component A</h2>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>

        <ComponentB user={user}/>

        </UserContext.Provider>
    </div>
    );
}

export default ComponentA 
