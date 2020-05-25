// ==UserScript==
// @name     PubMed JQuery test
// @version  1.0.0
// @grant    A. Baluja. License GPL v.3
// @description   Using JQuery to override !important properties
// @include       https://pubmed.ncbi.nlm.nih.gov
// ==/UserScript==

$(document).ready(function(){
    $('#txt').attr('div.ncbi-alerts', 'display: none !important');
});
