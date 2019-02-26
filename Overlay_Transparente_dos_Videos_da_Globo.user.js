// ==UserScript==
// @name        Overlay Transparente dos Videos da Globo
// @namespace   pootz10
// @description Muitas vezes q você deseja assistir e reassistir um video no g1/globo/globoplay um overlay escuro atrapalha enxergar enquanto você clica para pausar ou colocar o cursor na barra
// @include     http*://*.globo.com/*
// @version     1.0
// @license     MIT
// @updateURL   //https://raw.githubusercontent.com/pootz10/Overlay-Transparente-dos-Videos-da-Globo/master/Overlay_Transparente_dos_Videos_da_Globo.user.js
// @downloadURL //https://raw.githubusercontent.com/pootz10/Overlay-Transparente-dos-Videos-da-Globo/master/Overlay_Transparente_dos_Videos_da_Globo.user.js
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle(`
    .media-control.vod.w960 {
        opacity: 0.1 !important;
    }
`);
