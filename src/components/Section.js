import React from 'react';
import Renderer from './Renderer';

const Section = ({ backgroundColor, content }) => {
  return (
    <section style={{ backgroundColor }} className="py-12">
      {Array.isArray(content)
        ? content &&
          content.map((c, i) => <Renderer key={`${c.component}-${i}`} {...c} />)
        : content}
    </section>
  );
};

export default Section;
