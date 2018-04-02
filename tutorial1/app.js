new Vue({
  el: '#vue-app',
  data(){
    return{
      name:'Narendra',
      job: 'Ninja',
      website: 'http://www.thenetninja.com',
      websiteTag: '<a href="https://www.facebook.com">Facebook</a>'
    }
  },
  methods:{
    greet(time){
      return "Good " + time + " " + this.name
    }
  }
});
