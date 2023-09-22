import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/* function MyApp() {
  return (
    <div>
      <h2>Custom App</h2>
    </div>
  );
} */

/* const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
}; */

/* const anotherElem = (
  <a href="https://google.com" target='_blank'>Visit google</a>
); */

const anotherUser = 'Chai aur React';

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
);


ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
);
