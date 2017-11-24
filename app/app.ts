import axios from 'axios';
import Vue from 'vue';

import * as template from './app.html';

export default Vue.extend({
  template,
  data() {
    return {
      artists: []
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get('/api/artists').then(({data: artists}) => next(vm => vm.$data.artists = artists));
  }
});
