// ==UserScript==
// @name      ProNote Kill No-select
// @namespace ProNote
// @version   1
// @run-at   document-start
// @match   https://*.index-education.net/*
// ==/UserScript==

// Makes it possible to select and copy any text within ProNote

// From https://stackoverflow.com/a/19392142
function GM_addStyle (cssStr) {
    var D               = document;
    var newNode         = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ    = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (newNode);
}

GM_addStyle ( `
    .SansSelectionTexte {
        user-select: auto !important;
    }
` );
