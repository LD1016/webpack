import '../styles/image_viewer.css';
import big from '../assets/big.jpg';

const image = document.createElement('img');

// img.src = 'http://lorempixel.com/400/400';
image.src = big;

document.body.appendChild(image);
