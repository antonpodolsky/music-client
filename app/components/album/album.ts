import axios from 'axios';
import Vue from 'vue';

import * as template from './album.html';
import './album.scss';

export default Vue.component('album', {
  template,
  data: () => ({
    album: {
      name: '',
      artist: '',
      tracks: []
    }
  }),
  methods: {
    play(track) {
      axios.get(`/api/play/${track.id}`);
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get(`/api/album/${to.params.id}`).then(({data}) => next(vm => vm.$data.album = data));
  }
});
