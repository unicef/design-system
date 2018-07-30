---
layout: page
title: "Developers docs"
---

UNICEF has defined a visual design specification for our internal web
applications. This specification follows our brand guidelines, takes into
account accessibility and is rooted in a set of principles that are defined on
__[design guidelines](guidelines)__.

Additionally to those specs, UNICEF has created a reference implementation that tries to be as technology agnostic as possible, so it can be used with any modern dev framework such as React or Angular. One of the main goals of this implementation is to:
- Speed up the development of our applications
- Avoid the
- Improve the quality of the interfaces with a well thought and designed framework.

**This document is for developers** that have to implement the user
interface of a UNICEF web application. Here you will find the technical documentation with examples of the HTML and CSS classes.


This implementation is based on [bootstrap 4.0](https;//getbootstrap.com), one of the most popular and widely used frameworks on the Interent. For brevity, we assume the reader is familiar with this framework, and has a good understanding of HTML as well as SCSS/CSS.

If you need to define or design a user interface for a UNICEF application you will need to
understand how and when to use each of the elements defined in this document. To get that knowledge, please, read our __[design guidelines](guidelines)__.

<!--

TODO Define and Document this

# Include it in your project

There are 3 ways to include this framework in your project
CDN CSS

Local copy and use the CSS

Local copy and use SCSS

-->


## Typography

The default typography is the one defined by user's operating system. That way we don't need to download any font.

<div class="doc-example">
  <h1>h1. Heading 1</h1>
  <p class="lead">
  Lead paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
  </p>

  <p>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
  id est laborum.
  </p>

  <h2>Heading 2</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
  </p>

  <h3>Heading 3</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
  </p>

  <h4>heading 4</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
  </p>

  <h5>heading 5</h5>

  <h6>heading 6</h6>
</div>

{% highlight html %}
<h1>h1.Heading 1</h1>
<p class="lead">
Lead paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>
<p>
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
id est laborum.
</p>
<h2>Heading 2</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>

<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>

<h4>heading 4</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>

<h5>heading 5</h5>

<h6>heading 6</h6>

{% endhighlight %}


## Alerts

Alerts use the `.alert` class followed by the type of alert `alert-success`, `alert-warning`, `alert-danger`.

<div class="doc-example">
  <div class="alert alert-success" role="alert">
    This is a success alert. Check it out!
  </div>
  <div class="alert alert-warning" role="alert">
    This is a warning alert. It is used to warn the user about something
    he has to be aware of.
  </div>
  <div class="alert alert-danger" role="alert">
    This is a danger alert. An error or something that blocks current flow happened!
  </div>
</div>
{% highlight html %}

  <div class="alert alert-success" role="alert">
    This is a success alert. Check it out!
  </div>
  <div class="alert alert-warning" role="alert">
    This is a warning alert. It is used to warn the user about something
    he has to be aware of.
  </div>
  <div class="alert alert-danger" role="alert">
    This is a danger alert. An error or something that blocks current flow happened!
  </div>
{% endhighlight %}


Alerts support strong and links.

<div class="doc-example">
  <div class="alert alert-warning" role="alert">
    This alert displays how it looks a warning alert with a <strong>strong element</strong> and <a href="">a link</a>.
  </div>
</div>

{% highlight html %}
  <div class="alert alert-warning" role="alert">
    This alert displays how it looks a warning alert with a <strong>strong element</strong> and <a href="">a link</a>.
  </div>
{% endhighlight %}


# Buttons
There are 4 types of buttons. The `.btn` class is common to all of them:
  + `.btn-primary` for the main button.
  + `.btn-outline-primary`, for the default button.
  + `.btn-outline-danger`, for the danger button.
  + `.btn-link`, for the link button.

<div class="doc-example">
  <h5>Primary button</h5>
  <p>
    <button class="btn btn-primary">Normal</button>
    <button class="btn btn-primary active">Active</button>
    <button class="btn btn-primary" disabled>Disabled</button>
  </p>
  <h5>Default button</h5>
  <p>
    <button class="btn btn-outline-primary">Normal</button>
    <button class="btn btn-outline-primary active">Active</button>
    <button class="btn btn-outline-primary" disabled>Disabled</button>
  </p>
  <h5>Danger button</h5>
  <p>
    <button class="btn btn-outline-danger">Normal</button>
    <button class="btn btn-outline-danger active">Active</button>
    <button class="btn btn-outline-danger" disabled>Disabled</button>
  </p>

  <h5>Link button</h5>
  <p>
    <button class="btn btn-link active">Link button</button>
    <button class="btn btn-link">Normal</button>
    <button class="btn btn-link" disabled>Link button</button>
  </p>
</div>


Also, it is possible to group an input with a button:

<div class="doc-example">
  <div class="input-group">
    <input class="form-control py-2" type="search"
      placeholder="Example of input with search button" >
    <span class="input-group-append">
      <button class="btn btn-primary" type="button">
        <i class="fa fa-search"></i> Search
      </button>
    </span>
  </div>
</div>


# Forms

Form fields have different status:

<div class="doc-example">
  <form>
    <div class="form-group col-md-6">
      <label for="input-placeholder">Input with placeholder</label>
      <input type="email" class="form-control" id="input-placeholder"
        placeholder="This is the placeholder">
    </div>
    <div class="form-group col-md-6">
      <label for="input-value">Input with value</label>
      <input type="email" class="form-control" id="input-value"
        placeholder="This is the placeholder"
        value="This is the value">
    </div>
    <div class="form-group col-md-6">
      <label for="input-disabled">Input disabled</label>
      <input type="email" class="form-control" id="input-disabled"
        placeholder="This is the placeholder"
        value="This is the value of the disabled field"
        disabled>
    </div>
    <div class="form-group col-md-6">
      <label for="input-readonly">Input readonly</label>
      <input type="email" class="form-control" id="input-readonly"
        placeholder="This is the placeholder"
        value="This is the value of the readonly field"
        readonly>
    </div>
  </form>
</div>

Form elements can include short texts that provide important information to users.

<div class="doc-example">
  <form>
    <div class="form-group">
      <label for="input-placeholder-help">Your email</label>
      <input type="email" class="form-control" id="input-placeholder-help" aria-describedby="emailHelp" placeholder="Example: john.doe@unicef.org">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="input-placeholder-help-up">Corporate email</label>
      <small id="emailHelp-up" class="form-text text-muted">Domains like hotmail.com or gmail.com are not allowed.</small>
      <input type="email" class="form-control" id="input-placeholder-help-up" aria-describedby="emailHelp-up" placeholder="Example: john.doe@unicef.org">
    </div>
  </form>
</div>


## Textareas

To add a counter at the bottom of a field add the attributes `data-counter="true"` and  `maxlength="100"`, where 100 is the max number of characters. Add `data-autoresize="true"` to allow auto resize.

<div class="doc-example">
  <form class="row">
    <div class="form-group col-4">
      <label for="textarea-regular">Regular textarea</label>
      <textarea rows="3" id="textarea-regular"
        class="form-control"
        placeholder="This is the placeholder">
      </textarea>
    </div>
    <div class="form-group col-4">
      <label for="textarea-counter">Textarea with counter</label>
      <textarea id="textarea-counter"
        rows="3"
        class="form-control"
        placeholder="Counter should decrease while typing"
        data-counter="true"
        maxlength="100"></textarea>
      <small id="textarea-counter">100 characters left.</small>
      </div>
    <div class="form-group col-4">
      <label for="textarea-autoresize">Textarea with autoresize</label>
      <textarea rows="3" id="textarea-autoresize"
        class="form-control"
        placeholder="The number of lines shall grow with text."
        data-autoresize="true"></textarea>
    </div>
  </form>
</div>

These two enhancements require Javascript.

## Required fields

Required fields are those that are mandatory to fill in order to submit a form.
For required fields we mark `<label>` contents with an `<em>` and the form field (`<input`,  `select`, `textarea`,...) with the attribute `required`.

<div class="doc-example">
  <form>
    <div class="row">
      <div class="form-group col-md-6">
        <label for="input-placeholder-required"><em>Input with placeholder</em></label>
        <input type="email" class="form-control" id="input-placeholder-required"
            placeholder="This is the placeholder" required>
      </div>
      <div class="form-group col-md-6">
        <label for="input-value-required"><em>Input with value</em></label>
        <input type="email" class="form-control" id="input-value-required"
          placeholder="This is the placeholder"
          value="This is the value" required>
      </div>
      <div class="form-group col-md-6">
        <label for="textarea-required"><em>Textarea required</em></label>
        <textarea rows="3" class="form-control"
          placeholder="Required textarea" required></textarea>
      </div>
      <div class="form-group col-md-6">
        <label for="select-required"><em>Select required</em></label>
        <select id="select-required" rows="3" class="form-control" required>
        <option value="">Select...</option>
        <option value="value1">Value 1</option>
        <option value="value 1">Value 2</option>
        </select>
      </div>

    </div>
  </form>
</div>

## Errors in forms

UNICEF's reference implementation uses [Bootstrap conventions to display errors in forms](https://getbootstrap.com/docs/4.1/components/forms/#validation) as base. We slightly customized the look and feel and we only use the `.is-invalid` class to provide visual feedback.

Example the HTML and classes to display errors (no actual validation is performed)
<div class="doc-example">
  <form class="row">
    <div class="form-group col-md-4">
      <label for="input-with-error">Input with error</label>
      <input type="email" class="form-control is-invalid" id="input-with-error"
        placeholder="Placeholder"
        value="&##$%^ ABCD">
        <div class="invalid-feedback">
          Only numbers and letters are allowed.
        </div>
    </div>
    <div class="form-group col-md-4">
      <label for="select-with-error">Select with error</label>
      <select class="form-control is-invalid" id="select-with-error">
        <option value="">Select...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        </select>
        <div class="invalid-feedback">
          Error message.
        </div>
    </div>
    <div class="form-group col-md-4">
      <label for="input-with-error">Textarea with error</label>
      <textarea rows="3" class="form-control is-invalid" maxlength="200"
      placeholder="Placeholder text"></textarea>
        <div class="invalid-feedback">
          Error message.
        </div>
        <small class="input-with-error-counter">200 characters left</small>
    </div>
 </form>
</div>

# Tabs

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

  <h2>Contensts</h2>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>



# Cards
<div class="doc-example">
<div class="card-deck">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>

## List groups

<div class="doc-example">
  <ul class="list-group">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>

List group with a button:
<div class="doc-example">
  <ul class="list-group">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">
      <details>
      <summary>Add an element</summary>
      <div class="from-group p-t-3">
      <label for="details-input">Add an element to the list</label>
      <input class="form-control" id="details-input" name="details-input" type="text">
      <button class="btn btn-primary">Add to list</button>
      </div>
</details>
</li>
</ul>
</div>

# Labels

<span class="label label-default">Default</span>
<span class="label label-primary">Primary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
 <span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>



# Form fields

<form>
  <div class="row">
    <div class="col-md-3">
      <div class="form-group">
        <label for="input1">Field with placeholder</label>
        <input type="text" class="form-control" id="input1" placeholder="Placeholder">
      </div>
    </div>
  <div class="col-md-3">
    <div class="form-group">
      <label for="input2"><em>Mandatory field</em></label>
      <input type="text" class="form-control" id="input2" placeholder="Placeholder" value="This is the content">
    </div>
  </div>
  <div class="col-md-3">
    <div class="form-group">
      <label for="input3">Disabled field</label>
        <input type="text" class="form-control" id="input3" placeholder="Placeholder" disabled>
      </div>
    </div>

  <div class="col-md-3">
    <div class="form-group">
      <label for="input3b">Disabled field with value</label>
      <input type="text" class="form-control" id="input3b" placeholder="Placeholder" value="Value of the field" disabled>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-3">
    <div class="form-group">
        <label for="input4">Password</label>
        <input type="password" class="form-control" id="input4" placeholder="Password">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" id="exampleInputFile">
      <p class="help-block">Example block-level help text here.</p>
    </div>

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
  </div>

<div class="row">
  <div class="col-md-6">
    <div class="form-group">
      <label for="ta1">Example textarea</label>
      <textarea class="form-control" id="ta1" rows="3"></textarea>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="ta2">Disabled textarea</label>
      <textarea class="form-control" id="ta2" disabled rows="3"> Lorem ipsum</textarea>
    </div>
  </div>
</div>
<p>Regular checkboxes:</p>
<div class=row>
  <div class="col-md-6">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="cb100">
      <label class="form-check-label" for="cb1">Example of regular checkbox</label>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="cb101" disabled>
      <label class="form-check-label" for="cb101">Example disabled checkbox</label>
    </div>
  </div>
</div>
<p class="m-t-2">Checkboxes within a box make it easier for the user to click on them</p>
<div class=row>
  <div class="col-md-3">
    <div class="form-check with-box">
      <input type="checkbox" class="form-check-input" id="cb200">
      <label class="form-check-label" for="cb200">Boxed checkbox</label>
    </div>
  </div>
  <div class="col-md-3">
    <div class="form-check with-box">
      <input type="checkbox" class="form-check-input" disabled id="cb201">
      <label class="form-check-label" for="c201">Boxed checkbox disabled</label>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-4">
    <div class="form-check with-box aligned-with-fields">
      <input type="checkbox" class="form-check-input" id="cb202">
      <label class="form-check-label" for="cb202">Boxed checkbox aligned with input</label>
    </div>
  </div>
  <div class="col-md-4">
    <div class="form-group">
      <label for="cb203">Password</label>
      <input type="password" class="form-control" id="cb203" placeholder="Password">
    </div>
  </div>
</div>


# Inline elements

<div class="col-md-6">
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <label class="form-check-label" for="inlineCheckbox1">1</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
    <label class="form-check-label" for="inlineCheckbox2">2</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
  </div>
</div>

  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1">1</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
    <label class="form-check-label" for="inlineRadio2">2</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
    <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
  </div>

</form>






      <div class="row">
        <div class="col-md-8">
          <div class="form-group">
            <label for=""><em>Specific Intervention Codes</em> <i class="glyphicon glyphicon-info-sign"></i></label>
            <div class="box box-default m-b-0">
              <ul class="m-b-0"><li ng-repeat="item in ListSelectedSIC">{{item}}</li></ul>
            </div>
            <button class="k-button k-bottom-link">Select codes</button>
          </div>
        </div>
