import './style.css';
import domFunctions from './dom';
import getCity from './api';

window.onload = () => {
  getCity('London');
  domFunctions.citySearch();
};
