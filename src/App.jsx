import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {

  const [tabContent, setTabContent] = useState("Please click a btn")

  const handleSelect=(selectedBtn)=>{
    setTabContent(selectedBtn);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
              />
            <CoreConcept {...CORE_CONCEPTS[1]}/>

            {CORE_CONCEPTS.map((item)=>(
              <CoreConcept
                title={item.title}
                description={item.description}
                image={item.image}
              />)
            )}
              
          </ul>
        </section>
        <section id="examples">
              <h2>Examples</h2>
              <menu>
                <TabButton onSelect={()=>handleSelect("Components")}>Components</TabButton>
                <TabButton onSelect={()=>handleSelect("JSX")}>JSX</TabButton>
                <TabButton onSelect={()=>handleSelect("Props")}>Props</TabButton>
                <TabButton onSelect={()=>handleSelect("State")}>State</TabButton>
              </menu>

              {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;



// question to nk
// difference between (why do we have to write it as a function)?
// How can you "configure" the execution of an event-dependent function 
// ()=>handleSelect("Components")
// handleSelect("Components")