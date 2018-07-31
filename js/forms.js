//Mandatory fields

export function backgroundColorForRequiredFields() {
    document.addEventListener('DOMContentLoaded', function() {
   document.querySelector('[required]').addListener('change', () => {
     console.log("hola");
   });
}, false);
}