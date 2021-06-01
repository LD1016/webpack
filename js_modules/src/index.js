// // const sum = require('./sum');
// import sum from './sum';
// import './image_viewer';

// const total = sum(10, 5);

// console.log(total);

const button = document.createElement('button');

button.innerText = 'click me!';
// button.onclick = () => {
//   console.log(System.import('./image_viewer'));
// };
button.onclick = () => {
  import('./image_viewer')
    .then((module) => {
      return module.default();
      // console.log(module.default());
      // console.log(module);
    })
    .catch((err) => {
      console.log('chunk loading', err);
    });
};

document.body.appendChild(button);
