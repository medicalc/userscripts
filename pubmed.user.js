// ==UserScript==
// @name     PubMed JQuery test
// @version  1.0.0
// @grant    A. Baluja. License GPL v.3
// @description   Using JQuery to override !important properties
// @namespace     github
// @include       https://pubmed.ncbi.nlm.nih.gov
// ==/UserScript==

// function that loads jQuery + callback function
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

$(document).ready(function(){
    $('#txt').attr('div.ncbi-alerts', 'colour: lightblue !important');
});

// load jQuery to execute a given function
// addJQuery(main);

