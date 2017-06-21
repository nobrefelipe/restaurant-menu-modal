/*
 FADE IN THE ELEMENT
 */


import Vue from 'vue';
//import {TweenMax, Cubic} from "gsap";

Vue.directive('fade-in', {


    bind(el){

        el.classList.add('has-transition');

        el.style.opacity = 0;

        console.log('ssd');

    },

    // ENTRY
    inserted(el, binding) {

        setTimeout(function () {

            el.style.opacity = 1;

        }, binding.value)

    },


    // LEAVE
    unbind(el, binding) {

        el.style.opacity = 0;

    }


});