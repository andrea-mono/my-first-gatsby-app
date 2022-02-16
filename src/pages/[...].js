import * as React from 'react';
import '../assets/css/index.css';
import Renderer from '../components/Renderer';

const IndexPage = ({ params }) => {
  const component = {
    tagName: 'button',
    props: {
      type: 'submit',
      label: 'This is a button'
    },
    children: [
      {
        tagName: 'span',
        props: {
          type: 'submit',
          label: 'This is a button'
        },
        children: {},
      }
    ],
  };

  return (
    <main>
      <Renderer {...component} />
      {params['*']}
    </main>
  );
};

export default IndexPage;