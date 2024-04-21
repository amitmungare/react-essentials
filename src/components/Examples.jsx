import React from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "../components/TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

const Examples = () => {
  const [tabContent, setTabContent] = useState();

  const handleSelect = (selectedBtn) => {
    setTabContent(selectedBtn);
  };

  let tabData = <p>Please select a topic.</p>;

  if (tabContent) {
    tabData = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              onClick={() => handleSelect("components")}
              isSelected={tabContent === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleSelect("jsx")}
              isSelected={tabContent === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleSelect("props")}
              isSelected={tabContent === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleSelect("state")}
              isSelected={tabContent === "state"}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabData}
      </Tabs>
    </Section>
  );
};

export default Examples;

// question to nk
// difference between (why do we have to write it as a function)?
// How can you "configure" the execution of an event-dependent function
// ()=>handleSelect("Components")
// handleSelect("Components")
