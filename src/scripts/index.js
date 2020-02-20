import $ from 'jquery';
import cuid from 'cuid';
import '../styles/index.css';

import shoppingList from './shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
