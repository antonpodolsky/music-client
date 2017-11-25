import axios from 'axios';
import Vue from 'vue';

import * as template from './artists.html';
import './artists.scss';

export default Vue.component('artists', {
  template,
  data: () => ({
    artists: []
  }),
  beforeRouteEnter(to, from, next) {
    axios.get('/api/artists').then(({data}) => next(vm => vm.$data.artists = data));
  }
});
