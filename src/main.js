import Vue from 'vue'
import App from './App.vue'

window.onload = () => {
  const elApp = document.createElement('div');
  elApp.id = 'app';
  document.body.appendChild(elApp);

  new Vue({
    el: '#app',
    render: h => h(App)
  });
};

