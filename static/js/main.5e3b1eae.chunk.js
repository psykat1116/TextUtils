(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light")},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand text-".concat("light"===e.mode?"dark":"light"),href:"#"},"TextUtils"),l.a.createElement("button",{className:"navbar-toggler bg-".concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"}))),l.a.createElement("div",{className:"form-check form-switch w-25 d-flex"},l.a.createElement("input",{className:"form-check-input mx-3",onClick:e.toggle,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))}function i(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb-3 mt-3 container",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h3",null,e.heading),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"6",value:r,onChange:function(e){o(e.target.value)},placeholder:"Enter The Text"}),l.a.createElement("button",{type:"button",className:"btn btn-primary mt-3 mx-1",onClick:function(){var e=r.toUpperCase();o(e)}},"Convert To Upper Case"),l.a.createElement("button",{type:"button",className:"btn btn-primary mt-3 mx-1",onClick:function(){var e=r.toLowerCase();o(e)}},"Convert To Lower Case"),l.a.createElement("button",{type:"button",className:"btn btn-primary mt-3 mx-1",onClick:function(){o("")}},"Clear Text"),l.a.createElement("button",{type:"button",className:"btn btn-primary mt-3 mx-1",onClick:function(){var e=document.getElementById("exampleFormControlTextarea1");e.select(),navigator.clipboard.writeText(e.value)}},"Copy Text"),l.a.createElement("button",{type:"button",className:"btn btn-primary mt-3 mx-1",onClick:function(){var e=r.split(/[ ]+/);o(e.join(" "))}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-2",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h5",null," Your Content Summary "),l.a.createElement("p",null,"No Of Characters ",r.length," , No of Words ",r.split(" ").filter(function(e){return 0!==e.length}).length," , No of sentences ",r.split(". ").filter(function(e){return 0!==e.length}).length),l.a.createElement("p",null,"Approximatly ",.008*r.split(" ").filter(function(e){return 0!==e.length}).length," Minutes Needed To Read "),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Nothing For Preview")))}var s=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{mode:a,toggle:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#13284e"):(r("light"),document.body.style.backgroundColor="white")}}),l.a.createElement(i,{heading:"Enter The Text To Analyse",mode:a}))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null))),u()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.5e3b1eae.chunk.js.map