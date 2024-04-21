import React from 'react'
import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from "../components/CoreConcept.jsx";
import Section from './Section.jsx';

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
    <ul>
      {CORE_CONCEPTS.map((item) => (
        <CoreConcept key={item.title} {...item}/>
      ))}
    </ul>
  </Section>
  )
}

export default CoreConcepts