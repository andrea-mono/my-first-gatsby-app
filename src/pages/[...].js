import * as React from 'react';
import '../assets/css/index.css';
import Renderer from '../components/Renderer';

const pages = [
  {
    slug: '',
    content: [
      {
        component: 'section',
        backgroundColor: '#c2c2c2',
        decorations: true,
        content: [
          {
            component: 'card',
            title: 'Card 1',
          },
          {
            component: 'card',
            title: 'Card 2',
          },
        ],
      },
      {
        component: 'section',
        backgroundColor: '#555',
        decorations: true,
        content: [
          {
            component: 'card',
            title: 'Card 3',
          },
        ],
      },
    ],
  },
];

const IndexPage = ({ params }) => {
  const page = pages.find((page) => page.slug === params['*']);
  if (!page) return 'Handle 404';

  return (
    <main>
      {page.content.map((c, i) => (
        <Renderer key={`${c.component}-${i}`} {...c} />
      ))}
    </main>
  );
};

export default IndexPage;
