//Mandatory fields

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
    if (field.value == "") {
      color = getComputedStyle(document.body).getPropertyValue('--empty-required-field-background');
    }
    field.style.backgroundColor= color;
  }
  document.querySelectorAll('[required]').forEach(field => {
    //initialize color.
    setRequiredFieldBackgroundColor(field);
    //Add event listener
    field.addEventListener('change', (event) => {
      //console.log(e)
      setRequiredFieldBackgroundColor(event.target)
      //console.log(e.target.style.backgroundColor)
    });
  });
}, false);



/**
  * Textarea autoresize
  *
  * Textareas with data-autoresize attribute defined growth in height when
  * user enters text.
  *
**/
document.querySelectorAll('textarea[data-autoresize]').forEach( textarea => {
  textarea.setAttribute('style', 'height:' + (textarea.scrollHeight) + 'px;overflow-y:hidden;');
  textarea.addEventListener("input", (event) => {
    event.target.style.height = 'auto';
    event.target.style.height = (event.target.scrollHeight) + 'px';}, false);
});


/**
 * Textarea counter
 */
HTMLTextAreaElement.prototype.counter = function() {
  return this.maxLength - this.textLength;
}

document.querySelectorAll('textarea[data-counter]').forEach( textarea => {
  if (textarea.id == "") {
    throw "In order to use data-counter on a textarea you need to set a unique id to the textarea";
  }
  let counterId = textarea.id + "-counter";
  //if counter is not in the HTML => add it to the DOM.
  if (!document.getElementById(counterId)) {
    let counter = document.createElement("small")
    counter.innerHTML = textarea.counter() + " characters left";
    counter.id = counterId;
    textarea.parentNode.insertBefore(counter, textarea.nextSibling);
  }
  textarea.addEventListener("input", (event) => {
    console.log(counterId);
    document.getElementById(counterId).innerHTML = event.target.counter() + " characters left";
  }, false);
});

//# sourceMappingURL=unicef.js.map
