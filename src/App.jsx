import "./App.css";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState();

  const handleSelect = (selectedBtn) => {
    setTabContent(selectedBtn);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item}/>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")} isSelected={tabContent === 'components'}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={tabContent === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={tabContent === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={tabContent === 'state'}>State</TabButton>
          </menu>

          <div id="tab-content">
            {!tabContent ? (
              <p>Please select a topic.</p>
            ) : (
              <>
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                  <code>{EXAMPLES[tabContent].code}</code>
                </pre>
              </>
            )}
          </div>
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
