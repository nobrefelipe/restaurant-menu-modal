<template>

  <div id="restaurant-menu-modal">

    <rmm-menu-items></rmm-menu-items>

  </div>

</template>

<script>

  import rmmMenuItems from './components/menu-items/index.vue';
  import clickOutside from './directives/click-outside';
  import fadeIn from './directives/fadeIn';

  export default {

    name: 'restaurant-menu-modal',

    directives:{

      clickOutside,
      fadeIn

    },

    components:{

      rmmMenuItems

    },

    data () {
      return {

      }
    }

  }

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Raleway:400,500|Spectral:300,500');

  *{box-sizing: border-box; margin: 0; padding: 0;}

  #restaurant-menu-modal{

    font-family: 'Spectral', serif;

    margin: 0;

    padding: 0;

    color: #999;

    display: flex;

    align-items: center;

    justify-content: center;


    p{

      font-size: 16px;

      font-weight: 300;

      margin: 15px 0;

      @media all and (max-width: 900px){

        line-height: 22px;

      }


    }


    .large-title{

      font-size: 40px;

      line-height: 45px;

      margin: 20px 0 5px 0;

      color: #555;


      @media all and (max-width: 900px){

        font-size: 30px;

        line-height: 35px;

      }


    }


    .category-title{

      font-family: 'Raleway', sans-serif;

      font-weight: 500;

      text-transform: uppercase;

      font-size: 13px;

      color: #bbb;

    }


    .has-transition{

      transition: all .3s ease-in;

    }

  }



</style>