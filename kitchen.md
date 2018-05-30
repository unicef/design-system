---
layout: page
title: "Kitchen Sink"
---
In this kitchen sink you will find an example of how most commonly used
components look.

# Colors
We use the colors specified in our brand book as base. However, we have
extended them for particular usages.

## Typography: Headers

<div class="doc-example">
<h1>h1.Heading 1</h1>
<p class="lead">
Lead paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
id est laborum.
</p>

<h2>Heading 2</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident,
 sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<h4>heading 4</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<h5>heading 5</h5>
<h6>heading 6</h6>
</div>

**Usage guidelines**

  1. Follow a hierarchy. For example, under `h4`, there cannot be a `h3`.
  2. Although it is typical to use the brand color on headers, we use a dark
  grey because UNICEF blue may be confused with a link. We are using UNICEF
  blue for links.

## Alerts

<div class="doc-example">
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>

<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
</div>

**Usage guidelines**

  1. We use the traffic light metaphor.

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
<div class="from-group">
<label for="details-input">Add an element to the list</label>
<input class="form-control" id="details-input" name="details-input" type="text">
<button class="btn btn-primary">Add to list</button>
</div>
</details>
</li>
</ul>
</div>

**Usage Guidelines**

# Buttons

<div class="doc-example">
<button class="btn btn-primary">PRIMARY</button>
<button class="btn btn-outline-primary">PRIMARY</button>
<button class="btn btn-outline-danger">DANGER</button>
<button class="btn btn-link">Link button</button>
<br>
<br>
<button class="btn btn-primary" disabled>PRIMARY</button>
<button class="btn btn-outline-primary" disabled>PRIMARY</button>
<button class="btn btn-outline-danger" disabled>DANGER</button>
<button class="btn btn-link" disabled>Link button</button>
</div>


#### Usage Guidelines ####

1. Primary button is the one that allows the user to continue with the regular
flow.
2. Default buttons are those that allow the user to perform secondary
actions such as Cancel go to previous step.
3. Buttons are aligned on the left. Except in popups that are aligned on the right.
4. The order of the buttons should be from left tor right: from least
important action to primary/main action.
5. Danger actions
    1. Are exclusively reserved for destruction actions (such as delete an item).
    2. Require to display a confirmation popup before performing the action or present an undo alternative after destroying the element.


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
# Labels

<span class="label label-default">Default</span>
<span class="label label-primary">Primary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
 <span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>

# Display data / read only mode

<div class="row display-data">
  <div class="col-md-8">
    <div class="box box-default box-lg">
      <h2>Management Response</h2>
    <div class="row">
  <div class="col-sm-6">
    <p class="label">Lorem ipsum</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
  </div>
  <div class="col-sm-6">
    <p class="label">Lorem ipsum</p>
    <p><a href="http://www.google.es">link to somewhere</a></p>
  </div>
</div>

<h3> Recommendations h3</h3>
  <ul class="list list-horizontal clearfix">
    <li><h4> Recommendation 1</h4></li>
    <li><a href="#">Edit</a></li>
    <li><a class="danger-link" href="#">Delete</a></li>
  </ul>
  <hr>
  <div class="row">
    <div class="col-sm-12">
    <p class="label">Summary</p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>

<h5>ACTIONS</h5>
<div class="box box-default box-border">
  <ul class="list list-horizontal">
  <li><strong>Action 1</strong></li>
  <li><span class="label label-warning">underway</span></li>
<li><a href="#">Edit</a></li>
<li><a class="danger-link" href="#">Delete</a></li>
</ul>

<div class="row">
  <div class="col-sm-12">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <p class="label">Responsible of the action</p>
                <p>l asklf jalksfjaslkfjalskfjd laksfj aslkdf sdorem ipsum bla bla lblAssociatedActivities</p>
              </div>
              <div class="col-sm-6">
                <p class="label">Lorem ipsum</p>
                <p>l asklf jalksfjaslkfjalskfjd laksfj aslkdf sdorem ipsum bla bla lblAssociatedActivitie</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <p class="label">Summary</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="box box-default box-lg">
          <p class="label">Lorem ipsum</p>
          <p>lorem ipsum</p>
          <p class="label">Lorem ipsum</p>
          <p>lorem ipsum</p>
          <p class="label">Lorem ipsum</p>
          <p>lorem ipsum bla bla </p>
          <p class="label">Lorem ipsum</p>
          <p>lorem ipsum</p>
          <p class="label">Lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
      </div>
    </div>



    <h2 class="doc">Form fields</h2>
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
            <label for="input3">Disabled field with value</label>
            <input type="text" class="form-control" id="input3" placeholder="Placeholder" value="Value of the field" disabled>
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

        <h4>inline elements</h4>
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

        <h2 class="doc">Tabs</h2>

        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
          <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
          <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
          <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab" class="disabled">Settings</a></li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          kslafjalksfdklasdjf
        </div>




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
