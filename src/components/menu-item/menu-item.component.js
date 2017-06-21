import Vue from 'vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default  {

  name: 'rmm-menu-item',


  data() {
    return {

      isActive: false,

      data: null,

      image: null

    }
  },


  methods: {


    revealItem(){


      // Reinstance this
      let vm = this;

      // Get the host item
      let host = vm.$el;


      // If is already active
      if(host.classList.contains("show")){

        // Out Animation Starts
        host.classList.add('animating-out');

        // Animation runs for 400ms
        setTimeout(function () {

          // Out Animation Finishes
          host.classList.remove('animating-out');

          // Unreveal Component
          host.classList.remove('show');

          // Set Active Status
          vm.isActive = false;

          vm.data = null;

        }, 400);

      }else{

        // In Animation Starts
        host.classList.add('animating-in');


        // Animation runs for 400ms
        setTimeout(function () {

          // In Animation Finishes
          host.classList.remove('animating-in');

          // Reveal Component
          host.classList.add('show');

          // Set Active Status
          vm.isActive = true;

          /*

            GET THE DATA
            using Json Placeholder for dummy content

          */
          vm.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {

            //get the first result content
            vm.data = response.body[0].body;

          });


        }, 400);

      }

    }


  }

}

