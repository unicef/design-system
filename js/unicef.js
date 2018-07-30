/**
 *
 */

//import * as forms from 'forms.js';


/**
 * Set background color for input, selects and textareas.
 *
 * Requires two color CSS variables to be defined
 * --empty-required-field-background
 * --filled-required-field-background
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/var
 *
 * In UNICEF theme colors are defined in variables.scss 
 *
 *
 * If the field is empty sets the empty
 */
document.addEventListener('DOMContentLoaded', function() {
  function setRequiredFieldBackgroundColor(field) {
    //console.log(getComputedStyle(document.body).getPropertyValue('--empty-required-field-background'));
    color = getComputedStyle(document.body).getPropertyValue('--filled-required-field-background');
    if (field.value=="") {
      color = getComputedStyle(document.body).getPropertyValue('--empty-required-field-background');
    }
    field.style.backgroundColor= color;
  }

  document.querySelectorAll('[required]').forEach(field => {
    //initialize color.
    setRequiredFieldBackgroundColor(field);
    //Add event listener
    field.addEventListener('change', (e) => {
      //console.log(e)
      setRequiredFieldBackgroundColor(e.target)
      //console.log(e.target.style.backgroundColor)
    });
  });
}, false);
