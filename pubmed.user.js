// ==UserScript==
// @name     PubMed JQuery test
// @version  1.0.0
// @grant    A. Baluja. License GPL v.3
// @description   Using JQuery to override !important properties
// @namespace     github
// @include       https://pubmed.ncbi.nlm.nih.gov
// ==/UserScript==

var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js", function() {
    $('#txt').attr('div.ncbi-alerts', 'colour: lightblue !important');
});
