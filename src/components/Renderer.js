import React from 'react';
import Card from './Card';
import Section from './Section';

const components = {
  section: Section,
  card: Card,
};

const Renderer = (JSONSchema) => {
  const { component, ...props } = JSONSchema;
  if (typeof components[component] === 'undefined') return null;

  return React.createElement(components[component], props, null);
};

export default Renderer;
