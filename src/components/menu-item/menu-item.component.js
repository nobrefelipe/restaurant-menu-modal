export default  {

  name: 'rmm-menu-item',


  data() {
    return {

      isActive: false

    }
  },


  methods: {

    revealItem(){


      let vm = this;

      let host = this.$el;

      if(host.classList.contains("show")){

        host.classList.add('animating-out');

        vm.isActive = false;

        setTimeout(function () {

          host.classList.remove('show');

          host.classList.remove('animating-out');


        }, 400);

      }else{

        host.classList.add('animating-in');

        setTimeout(function () {

          host.classList.remove('animating-in');

          host.classList.add('show');

          vm.isActive = true;

        }, 400);

      }

    }


  }

}

