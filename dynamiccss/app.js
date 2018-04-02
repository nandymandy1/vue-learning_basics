new Vue({
  el: '#app',
  data(){
    return{
      available: false,
      nearby: false
    }
  },
  methods:{

  },
  computed:{
    compClasses(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
