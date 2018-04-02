new Vue({
  el: '#app',
  data(){
    return{
        age: 24,
        x:0,
        y:0
    }
  },
  methods:{
      addAge(inc){
        this.age += inc
      },
      subAge(dec){
        this.age -= dec
      },
      updateXY(even){
        // console.log(event);
        this.x = event.offsetX
        this.y = event.offsetY
      },
      click(){
        alert("You Clicked me")
      }
    }
});
