---
layout: page
in-navbar: true
id: developer-docs
title: "Developer documentation"
---

UNICEF has defined a visual design specification for our internal web
applications. This specification follows our brand guidelines, takes into
account accessibility and is rooted in a set of principles that are defined on our
__[UX/UI design guidelines](design-guidelines)__.

Additionally to those specs, UNICEF has created a technology agnostic reference
implementation, so it can be used with any modern development framework such
as React or Angular. One of the main goals of this implementation is to:
- Speed up the development of our applications by providing developers with a
  set of CSS classes that comply with usability, branding and accessibility best
  practices.
- Improve the quality of the interfaces with a well thought and designed framework.

**This document is for developers** that have to implement the user
interface of a UNICEF web application. Here you will find the technical
documentation with examples of the HTML and CSS classes.


This implementation is based on [bootstrap 4.x](https;//getbootstrap.com),
one of the most popular and widely used frameworks on the Internet. For brevity,
we assume the reader is familiar with this framework, and has a good
understanding of HTML as well as CSS.

If you need to design a user interface for a UNICEF
application you will need to understand how and when to use each of the
elements described in this document. To get that knowledge,
please, read our __[UX/UI design guidelines](design-guidelines)__.



## Example

This is an example of a full page.
### [Full page example](./sample1.html)


## Getting started

In order to use the UNICEF's UI in your project you can reference a CDN or download using npm.

### With CDN
CDNs can offer a performance benefit by hosting on servers spread across the globe. This also offers an advantage that if the visitor to your webpage has already downloaded a copy of the files from the same CDN, it won't have to be re-downloaded.

For the CSS:
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@unicef/design-system/dist/css/unicef.css">
```

If you need to include the JavaScript, you have two options. The first one, a
minified javascript bundle file that includes all bootstrap JavaScript (bootstrap, popper, jquery). You need this if you require dropdowns, tabs, etc.

```html
<!-- All js bundled -->
<script src="https://cdn.jsdelivr.net/npm/@unicef/design-syste/dist/js/unicef-bundle.min.js"></script>

<!-- only the scripts that were created by UNICEF (no requirement)-->
<script src="https://cdn.jsdelivr.net/npm/@unicef/design-system/dist/js/unicef.min.js"></script>
```

### Using npm

This bootstrap customization is based on [SASS](https://sass-lang.com), and therefore you can easily override the CSS classes for your particular project.

First, install the npm package

```
 npm install @unicef/design-system
```

Import `unicef.scss` in your global `scss` file. For example:

```css
/* you may need to change the path to the node_modules dir */
@import "../node_modules/@unicef/design-system/scss/unicef"
```

We have used bootstrap variables whenever possible. Custom created variables are defined in `scss/_variables.scss`.


## Typography

The default typography is the one defined by user's operating system. That way we don't need to download any font.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}


## Alerts

Alerts use the `.alert` class followed by the type of alert `.alert-success`,
`.alert-warning`, `.alert-danger`.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

Alerts support strong and links.

{% capture example %}
  <div class="alert alert-warning" role="alert">
    This alert displays how it looks a warning alert with a
    <strong>strong element</strong> and
    <a href="">a link</a>.
  </div>
{% endcapture %}
{% include example.html content=example %}


## Buttons
There are 4 types of buttons. The `.btn` class is common to all of them:
  + `.btn-primary` for the main button.
  + `.btn-outline-primary`, for the default button.
  + `.btn-outline-danger`, for the danger button.
  + `.btn-link`, for the link button.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}



Also, it is possible to group an input with a button:

{% capture example %}
  <div class="input-group">
    <input class="form-control py-2" type="search"
      placeholder="Example of input with search button" >
    <span class="input-group-append">
      <button class="btn btn-primary" type="button">
        <i class="fa fa-search"></i> Search
      </button>
    </span>
  </div>
{% endcapture %}
{% include example.html content=example %}


## Navigation Bar

{% capture example %}
<nav class="navbar navbar-expand-md flex-column flex-md-row bd-navbar p-0">
  <a class="navbar-brand navbar-line d-none d-md-block d-lg-block my-2 ml-3"
    href="/" aria-label="Unicef">
    <img class="img-fluid" alt="unicef-logo"
      src="assets/images/unicef-logo.svg">
  </a>
  <a class="navbar-brand" href="/">Application Name</a>
</nav>
{% endcapture %}



{% include example.html content=example %}
{% capture example %}
<nav class="navbar navbar-expand-md flex-md-row bd-navbar p-0">
  <a class="navbar-brand ml-3" href="/">Application name</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
  </button>
  <div class="collapse navbar-collapse"  id="navbarSupportedContent1">
    <ul class="navbar-nav rounded-left flex-row d-md-flex ml-auto p-1 pl-3">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink"  
          data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
          aria-expanded="false">
          Libya
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Menu Item</a>
          <a class="dropdown-item" href="#">Menu Item 2</a>
        </div>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#"><span class="badge">4</span>Notifications</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-inbox" title="Inbox"></i>Item with Icon
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink"  
          data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
          aria-expanded="false">
          <img class="img-fluid" alt="unicef-logo" title="Profile"
            src="assets/images/avatar.png"></a>
        <div class="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Menu Item</a>
          <a class="dropdown-item" href="#">Menu Item 2</a>
        </div>
      </li>		
    </ul>
  </div>
</nav>

{% endcapture %}
{% include example.html content=example %}
{% capture example %}
<nav class="navbar navbar-expand-md flex-md-row bd-navbar p-0">
  <a class="navbar-brand ml-3" href="/">Application name</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">
      <i class="fas fa-bars"></i>
    </span>
  </button>
  <div class="collapse navbar-collapse"  id="navbarSupportedContent2">
    <ul class="navbar-nav rounded-left flex-row d-md-flex ml-auto p-1">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink"  
          data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
          aria-expanded="false">
          Libya
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Menu Item</a>
          <a class="dropdown-item" href="#">Menu Item 2</a>
        </div>
      </li>			
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span class="badge ">4</span>Notifications
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-inbox" title="Inbox"></i>Item With Icons
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink"  
          data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
          aria-expanded="false">
          <img class="img-fluid" alt="unicef-logo" title="Profile"
            src="assets/images/avatar.png"></a>
        <div class="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Menu Item</a>
          <a class="dropdown-item" href="#">Menu Item 2</a>
        </div>
      </li>			
    </ul>
  </div>
</nav>
<ul class="nav nav-tabs p-0 bg-white">
  <li class="nav-item">
    <a class="nav-link active" href="#">SELECTED</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">UNSELECTED</a>
  </li>
  <li class="nav-item disabled">
    <a class="nav-link disabled" href="#">DISABLED</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
      data-toggle="dropdown" href="#" role="button"
      aria-haspopup="true" aria-expanded="false">DROPDOWN
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <a class="dropdown-item" href="#">Menu Item- Long Title</a>
      <a class="dropdown-item" href="#">Menu Item 2</a>
      <a class="dropdown-item" href="#">Menu Item 3</a>
    </div>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link disabled dropdown-toggle" id="navbarDropdownMenuLink"  
      data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
      aria-expanded="false">DISABLED DROPDOWN
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <a class="dropdown-item" href="#">Menu Item- Long Title</a>
      <a class="dropdown-item" href="#">Menu Item 2</a>
      <a class="dropdown-item" href="#">Menu Item 3</a>
    </div>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Accessibility

To [support skip navigation](https://webaim.org/techniques/skipnav/), always add the `.skip` navigation before the navigation bar pointing to the element in which the content starts.

Adding this helps users that browse the web with keyboards, allowing them to skip all
the links in your main menu.

```html
<a class="skip" href="#contents" tabindex="0">Skip Navigation</a>
<!-- navbar  goes here--->
<nav class="navbar navbar-expand-md flex-md-row bd-navbar">
  ....
</nav>

<!-- your contents start here -->
<div id="contents">
</div>
```

## Tabs
{% capture example %}
<div class = "container-fluid">
  <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
    <li class="nav-item">
     <a class="nav-link active" id="tab-1-tab" data-toggle="tab" href="#tab-1"
      role="tab" aria-controls="tab-1" aria-selected="true">Tab 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="tab-2-tab" data-toggle="tab" href="#tab-2"
      role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</a>
    </li>
    <li class="nav-item disabled">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
        data-toggle="dropdown" href="#" role="button"
        aria-haspopup="true" aria-expanded="false">Menu</a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#">Menu Item - Long Title</a>
        <a class="dropdown-item" href="#">Menu Item 2</a>
        <a class="dropdown-item" href="#">Menu Item 3</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link disabled dropdown-toggle" id="navbarDropdownMenuLink"
        data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
        aria-expanded="false">Menu disabled
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#">Menu Item- Long Title</a>
        <a class="dropdown-item" href="#">Menu Item 2</a>
        <a class="dropdown-item" href="#">Menu Item 3</a>
      </div>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
  <div class="tab-pane fade active show" id="tab-1" role="tabpanel"
    aria-labelledby="tab-1-tab">
    Consequat occaecat ullamco amet non eiusmod nostrud dolore
    irure incididunt est duis anim sunt officia.
    Fugiat velit proident aliquip nisi incididunt nostrud exercitation
    proident est nisi.

    Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit
    cupidatat in veniam ad.
    Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa
    excepteur quis.
    Occaecat sit eu exercitation irure Lorem incididunt nostrud.
  </div>
  <div class="tab-pane fade" id="tab-2" role="tabpanel"
    aria-labelledby="tab-2-tab">
    Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit
    commodo mollit ex.
    Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do.

    Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt.
    Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation
    duis deserunt.
    Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco
    ea tempor duis.
  </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}



## Images
Images should weight the least amount possible.

1. Use the format that weights for the size and quality you require. Typically, it is recommended to use JPG format for pictures and SVG for graphics and icons.

2. Use size optimizers such as [svgo](https://github.com/svg/svgo) or [jpeg optim]( https://github.com/tjko/jpegoptim).

3. It is necessary to set the `alt` description on all images. Keep this description brief, describe what you see and do not interpret the contents of the image. For decorative images, use an empty string `alt` attribute (`alt=""`).


## Forms

Form fields have different status:

{% capture example %}
  <form>
   <!-- on inputs/selects/textareas use the class .form-control -->
    <div class="form-group col-md-6">
      <label for="input-placeholder">Input with placeholder</label>
      <input type="text" class="form-control" id="input-placeholder"
        placeholder="Placeholder">
    </div>
    <div class="form-group col-md-6">
      <label for="input-value">Input with value</label>
      <input type="text" class="form-control" id="input-value"
        placeholder="Placeholder"
        value="Value">
    </div>
    <!-- mark with the attribute disabled, disabled fields -->
    <div class="form-group col-md-6">
      <label for="input-disabled">Input disabled</label>
      <input type="text" class="form-control" id="input-disabled"
        placeholder="Placeholder"
        value="Value of the disabled field"
        disabled>
    </div>
    <!-- mark with the attribute readonly, fields that
    are read only -->
    <div class="form-group col-md-6">
      <label for="input-readonly">Input readonly</label>
      <input type="text" class="form-control" id="input-readonly"
        placeholder="Placeholder"
        value="Value of the readonly field"
        readonly>
    </div>
  </form>
{% endcapture %}
{% include example.html content=example %}


Form elements can include short texts that provide important information to users.

{% capture example %}
  <form>
    <div class="form-group">
      <label for="input-placeholder-help">Your email</label>
      <input type="email" class="form-control" id="input-placeholder-help"
        aria-describedby="emailHelp" placeholder="Example: john.doe@unicef.org">
      <small id="emailHelp" class="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>
    <div class="form-group">
      <label for="input-placeholder-help-up">Corporate email</label>
      <small id="emailHelp-up" class="form-text text-muted">
        Domains like hotmail.com or gmail.com are not allowed.
      </small>
      <input type="email" class="form-control" id="input-placeholder-help-up"
        aria-describedby="emailHelp-up" placeholder="Example: john.doe@unicef.org">
    </div>
  </form>
{% endcapture %}
{% include example.html content=example %}


## Textareas

To add a counter at the bottom of a field add the attributes `data-counter="true"` and  `maxlength="100"`, where 100 is the max number of characters. Add `data-autoresize="true"` to allow auto resize.

{% capture example %}
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
      </div>
    <div class="form-group col-4">
      <label for="textarea-autoresize">Textarea with autoresize</label>
      <textarea rows="3" id="textarea-autoresize"
        class="form-control"
        placeholder="The number of lines shall grow with text."
        data-autoresize="true"></textarea>
    </div>
  </form>
{% endcapture %}
{% include example.html content=example %}

These two enhancements require Javascript.

## Required fields

Required fields are those that are mandatory to fill in order to submit a form.
For required fields we mark `<label>` contents with an `<em>` and the form field (`input`,  `select`, `textarea`,...) with the attribute `required`.

{% capture example %}
  <form>
    <div class="row">
      <div class="form-group col-md-6">
        <label for="input-placeholder-required"><em>Input with placeholder</em></label>
        <input type="text" class="form-control" id="input-placeholder-required"
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
        <div class="select-wrapper">
        <select id="select-required" rows="3" class="form-control" required>
        <option value="">Select</option>
        <option value="value1">Value 1</option>
        <option value="value 1">Value 2</option>
        </select>
        </div>
      </div>
    </div>
  </form>
{% endcapture %}
{% include example.html content=example %}


## Errors in forms

UNICEF's reference implementation uses [Bootstrap conventions to display errors in forms](https://getbootstrap.com/docs/4.1/components/forms/#validation) as base. We slightly customized the look and feel and we only use the `.is-invalid` class to provide visual feedback.

Example the HTML and classes to display errors (no actual validation is performed)

{% capture example %}
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
      <div class="select-wrapper">
        <select class="form-control is-invalid" >
          <option value="">Select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
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
{% endcapture %}
{% include example.html content=example %}


## Cards

Use `.card-deck` to have same all cards of a row with the sam length.

{% capture example %}
<div class="card-deck">
  <div class="card">
    <h5 class="card-header">Card title</h5>
    <div class="card-body">
      <p class="card-text">This is a longer card with supporting text below
        as a natural lead-in to additional content.
        This content is a little bit longer.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div class="card">
    <h5 class="card-header">Card title</h5>
    <div class="card-body">
      <p class="card-text">This card has supporting text below
        as a natural lead-in to additional content.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div class="card">
    <h5 class="card-header">Card title</h5>
    <div class="card-body">
      <p class="card-text">This is a wider card with supporting text below
        as a natural lead-in to additional content. This card has even longer
        content than the first to show that equal height action.</p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Card with actions menu

{% capture example %}
<div class="card-deck">
  <div class="card">
    <div class="card-header d-flex">
      <h5>This card has action menu</h5>
      <div class="ml-auto">
        <a class="dropdown-toggle" id="cardDropdown"  
          data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
          aria-expanded="false">
          Actions
        </a>
        <div class="dropdown-menu" aria-labelledby="cardDropdown">
          <a class="dropdown-item" href>Edit</a>
          <a class="dropdown-item" href>Share</a>
           <div class="dropdown-divider"></div>
          <a class="dropdown-item" href>Remove card</a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">This is a longer card with supporting text below
        as a natural lead-in to additional content.
        This content is a little bit longer.
      </p>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Cards with navigation tabs

<div class="card">
  <ul class="nav nav-tabs" id="card-tabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="home-tab" data-toggle="tab"
        href="#home" role="tab" aria-controls="home"
        aria-selected="true">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="profile-tab" data-toggle="tab"
        href="#profile" role="tab" aria-controls="profile"
        aria-selected="false">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
  <div class="card-body">
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel"
        aria-labelledby="home-tab">
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. 
        </p>
      </div>
    <div class="tab-pane fade" id="profile" role="tabpanel"
      aria-labelledby="profile-tab">
      <p class="card-text">Morbi elit justo, finibus consequat facilisis eget,
        dictum in justo. 
      </p>
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

## Tables

{% capture example %}
<table class="table">
  <thead>
    <tr>
      <th>Main Element</th>
      <th>Date</th>
      <th>Amount(USD)</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td>
        <a href="#">Text is a link</a>
      </td>
      <td>29-May-2018</td>
      <td>$23.33</td>
    </tr>
    <tr>
      <td>
        <a href="#">This is another link. Vertically align cells to the middle</a>
      </td>
      <td>12-Aug-2017</td>
      <td class>$99.44</td>
    </tr>
    <tr>
      <td>
        <a href="#">Text is left-aligned</a>
      </td>
      <td>29-May-2018</td>
      <td>$1,223.00</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

## Loading status

Everytime a asynchronous request is done in the client side, the app should display that status.
We use `.spinner-border` or `.spinner-border.spinner-border-sm` (small one).

For accessibility, notice you need to include `role=status`
{% capture example %}
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border spinner-border-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>
{% endcapture %}
{% include example.html content=example %}

To specify the action that is being performed:
{% capture example %}
<div class="d-flex align-items-center">
  <div class="spinner-border" role="status" aria-hidden="true"></div>
  <strong class='ml-2'>Loading...</strong>
</div>
{% endcapture %}
{% include example.html content=example %}

When the action is performed within a button

{% capture example %}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" 
    role="status" aria-hidden="true"></span>
  Loading...
</button>

<button class="btn btn-outline-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" 
    role="status" aria-hidden="true"></span>
  Loading...
</button>
{% endcapture %}
{% include example.html content=example %}

 More info in [bootstrap spinners documentation](https://getbootstrap.com/docs/4.2/components/spinners/).

## Progress Bar

Indicates the status of completeness of a process.

There are different background colors available (`.bg-success`, `.bg-warning`, etc..)

Please, notice the accessibility attributes `role`, `aria-valuenow`,
`aria-valuemin` and `aria-valuemax`.

{% capture example %}
  <h6>Empty</h6>
  <div class="progress">
    <div class="progress-bar bg-success" style="width: 0%"
      role="progressbar" aria-valuenow="0" 
      aria-valuemin="0" aria-valuemax="100">
    </div>
  </div>
  <div class="d-flex justify-content-between">
    <span class="progress-min-max">0%</span>
    <span class="progress-min-max">100%</span>
  </div>

   <h6>Without numbers</h6>
  <div class="progress mb-3">
    <div class="progress-bar bg-success" style="width: 50%"
      role="progressbar" aria-valuenow="75" 
      aria-valuemin="0" aria-valuemax="100">
    </div>
  </div>
  
  <h6>Filled</h6>
  <p>Allocated funds: $87,500 (75%)</p>
  <div class="progress" title="87500, (75%)">
    <div class="progress-bar bg-success" style="width: 75%"
      role="progressbar" aria-valuenow="87500.00" 
      aria-valuemin="0.00" aria-valuemax="125000.00">
    </div>
  </div>
  <div class="d-flex justify-content-between">
    <span class="progress-min-max">$0.00</span>
    <span class="progress-min-max">$125,000.00</span>
  </div>



{% endcapture %}
{% include example.html content=example %}

For more information [see bootstrap docs](https://getbootstrap.com/docs/4.0/components/progress/)
