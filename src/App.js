import React, { useState, useEffect } from "react";
import { useUpdateTools } from "./components/ToolsContext.js";
import "./App.css";
import { getCurrentVersionTag } from "./services/github-services.js";
// import { getAllDocumentsFromCollection } from "./services/firebase-services.js";
import { HeaderBar } from "./components/HeaderBar/HeaderBar.js";
import { ScrollerTop } from "./components/ScrollerTop/ScrollerTop.js";

function getCurrentYear(){
  return new Date().getFullYear();
};

export const App = () => {
  // States
  const [version, setVersion] = useState("0.0.1");

  // Hooks
  const updateTools = useUpdateTools();  
  useEffect(() => {    
    (async ()=>{
      // Load current git version
      const currentVersionTag = await getCurrentVersionTag();
      setVersion(currentVersionTag);

      // Load databases
      // const tools = await getAllDocumentsFromCollection("tools");
      // const courses = await getAllDocumentsFromCollection("courses");
      // const works = await getAllDocumentsFromCollection("works");
      
      // updateTools(tools);
    })();
  }, [updateTools]);

  return (
    <>
      <ScrollerTop />
      <HeaderBar />
      <p>
        {`Developed by Gileade Teixeira`}
        <br/>
        <i>{`${getCurrentYear()}, version ${version}`}</i>
      </p>
    </>
  );
};
