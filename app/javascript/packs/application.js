// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import "controllers"

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"



// Internal imports, e.g:
import { ScrollDepthIndicator } from '../components/scroll_indicator';
import { demoTooltip } from '../components/tooltip';
import { validFalseDemo } from '../components/modal';
import { PreloaderInit } from '../components/preloader';
import { onboardingModal } from '../components/onboarding_modal.js';


document.addEventListener('turbolinks:load', (e) => {
  // Call your functions here, e.g:
  // initSelect2();
  //console.log(e)
  validFalseDemo(e);
  demoTooltip(e);
  // PreloaderInit(e);
  ScrollDepthIndicator(e);

  onboardingModal()

});





