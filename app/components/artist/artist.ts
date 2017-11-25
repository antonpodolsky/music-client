import axios from 'axios';
import Vue from 'vue';

import * as template from './artist.html';
import './artist.scss';

export default Vue.component('artist', {
  template,
  data: () => ({
    artist: {
      albums: []
    }
  }),
  beforeRouteEnter(to, from, next) {
    axios.get(`/api/artist/${to.params.id}`).then(({data}) => next(vm => vm.$data.artist = data));
  }
});
