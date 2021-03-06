# UNICEF Design System

The status of this project is **ALFA**. So, incompatible changes may appear.

The goal of this project is to:

  - Define a common user interface across applications.
  - Speed up the design time allowing the design team to focus on user
    needs rather on tiny interaction details.
  - Speed up the development time by reusing the HTML and CSS.


Designers, product managers and anyone that has to define the user interface
of a web application we provide the following
[UX/UI design guidelines](https://unicef.github.io/design-system/design-guidelines.html).

For developers, we provide a reference implementation.
[Documentation for developers can be found here](https://unicef.github.io/design-system/developer-docs.html)

This reference implementation is based on  based on [Bootstrap 4.3](http://getbootstrap.com).



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


### Leaner version.
In order to make bootstrap version leaner, the following colors have been
removed from `$theme-colors`: `secondary`,`info`,`light`,`dark`. This means
that, for example, `<button class="btn btn-info">Info button</button>` will not
work. You can activate them back in `_variables.scss`.


### Development

We use [jekyll](https://jekyllrb.com/) for generating the documentation and [gulp](https://gulpjs.com/) for automating the tasks.

Get source code from git repository

```
$ git clone https://github.com/unicef/design-system.git
```

Install dependencies

```bash
$ cd design-system
$ npm install
$ bundle install
```

### Tasks

To run the local server
```
$ bundle exec jekyll serve --livereload
```
Then browse to `http://localhost:4000/`

While developing run in another terminal the `watch` task to compile and minimize the SCSS and JavaScript:
```
$ gulp watch
```

To continuously compile SASS run
```
$ gulp watch-sass

```

# Contribution

Just clone the project and make a pull request.

# License

Distributed under GLPv3.
