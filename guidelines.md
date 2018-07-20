---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Design Guidelines
---

## What are these guidelines?

These guidelines establish a set of best practices and rules about how to
design an internal site on UNICEF.

These guidelines are especially oriented to productivity web applications rather
than communication web sites.  

## Who is expected to use these guidelines?

Anyone who has to define the user interface of a digital web application within
or for UNICEF, typically a user experience designer and/or product owners.

## Principles

Our design principles are the roots, the core, the foundation. All our design
decisions are based on the following principles.


#### 1. Lean design, for slow Internet connections
Because UNICEF staff is working on many countries with slow Internet
connections, every design has to be fast and nimble.

#### 2. Design for all, no matter your tech savviness
Explicit and obvious design for all, because no matter how tech savvy you are,
our apps shall be easy to use and understand. For example, we always display
icons with labels, use the minimum amount of words that convey one single
complete meaning, in case of doubt we prefer more words.

#### 3. Accessible for all, regardless of disability
Because in UNICEF every single person is important, design shall be accessible
for all.

#### 4. Design is as little design as possible
Less, but better – because it concentrates on the essential aspects, and the
apps are not burdened with non-essentials.

#### 5. Consistent designs
In visual style, labeling, layouts and processes. Because we don’t reinvent the
wheel in every project and users don’t need to learn new conventions for every
tool. But we understand we use a very diverse set of technologies. A best effort
shall be approached.

#### 6. Made by UNICEF
Because we love UNICEF, designs present UNICEF brand core values and principles,
in a subtle and humble way.  

## Implementing this guidelines in your design

Within UNICEF there is a wide variety of projects, some are completely new, some
depend on legacy systems, some just need a few tweaks, some are just platforms
with an out of the box customization, etc. With this diversity, designers will
not always be able to fully comply with this specification.

However, we have defined some basic level of compliance that shall be considered
as MANDATORY.


## Brand colors

`TODO: image with the colors`

Our brand main color is blue which is the color typically used with links. So,
to avoid confusion, we only use the brand color for links and the main
navigation bar.


## Traffic light colors
We use the traffic light colors metaphor for indicating status or result.

1. **Green color means success** : Some task was finished successfully. For
example, display a notification after the user successfully saved the contents
of a form.

2. **Orange and yellow mean warning**: This color warns the user that there is
something that he may need to pay attention. Something exceptional, something
that is important for him to know.

3. **Red means Error or danger**: This color says the user that there is
something that is preventing him to continue with the regular flow. For example,
user forgot to fill a mandatory field.

In general, because of the negative implications of the red color, we should try
to avoid using it in excess.


<p class="alert alert-warning">
We never use color as a unique cue in the interface as there may be colorblind
users.   
</p>


## Typography

For keeping the weight of the HTML low, we haven't defined a default typography
other than the default font of the operating system the user is running. For
example, in Windows 10 is `Segoe`.

## Text

Headings `h1` to `h6`.

  1. Follow a hierarchy. For example, under `h4`, there cannot be a `h3`.
  2. Although, it is typical to use the brand color on headers, we use a black
  color because UNICEF blue may be confused with a link. We are using UNICEF
  blue for links.

Recommended date format is `dd MMM YYYY`. For instance:

```
01 Feb 2018
10 Mar 2020
```

Never use the format `dd/mm/yyyy` or `mm/dd/yyyy`. A date such as
`02/01/2020`, can be interpreted either as `01 Feb 2020` or `02 Jan 2020`.


## Buttons

1. Primary button is the one that allows the user to continue with the regular
flow. It is the most visually prominent on the interface.

2. Default buttons are those that allow the user to perform secondary
actions such as Cancel go to previous step.

3. Buttons are aligned on the left. Except in popups that are aligned on the right.

4. The order of the buttons should be from left tor right: from least
important action to primary/main action.

5. Danger actions
  1. Are exclusively reserved for destruction actions (such as delete an item).
  2. Require to display a confirmation popup before performing the action or
  present an undo alternative after destroying the element.


## Forms

Forms shall be designed the following way:

1. Fields shall be ordered from more important to less important, leaving optional fields at the end.

2. Related fields must be close to each other. For example, if residential address, zip code and country are requested, these must be close to each other as they are related.

3. Form fields shall be ordered in a logic way and/or following most common conventions. For example, in a login page, the username is requested before the password.

There are two ways of arranging fields in a form. The first one is in a linear way, that is, by displaying one field above the next one. The second way to arrange a form is by trying to maximize the number of fields visible in the screen, that is, one field next to other.

//TODO: Add image of both types of forms.

For repetitive tasks expected to be done by the same user, it is recommended to follow the second approach, that is, try to display as many elements in the screen as possible. It allows the user to review more information/fields without scrolling.

For tasks sporadically done or performed by new users, a linear form may suit better, because it helps the user to sequentially fill the form.


## Asynchronous communication

Whenever the system is performing an action in background the user interface shall provide any kind of visual feedback to indicate the user this status.
