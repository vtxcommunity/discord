(()=>{"use strict";var e={970:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addScript=void 0,t.addScript=function(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.addEventListener("load",t),r.addEventListener("error",n),document.body.appendChild(r)}))}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var d=t[r]={exports:{}};return e[r](d,d.exports,n),d.exports}(()=>{const e=n(970);!async function(){try{await(0,e.addScript)("https://cdn.finsweet.com/files/fscalendar/calendar-invite-v1.0.min.js"),window.fsCalendar({title:".event-title",start:".event-start",end:".event-end",timezone:".event-timezone",address:".event-location",description:".event-desc",eventItemClass:".event-item-content",localize:!0})}catch(e){console.error(e)}}()})()})();