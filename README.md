# UNICEF Design System

The status of this project is **ALFA**. So, incompatible changes may appear.

The goal of this project is to:

  - Define a common user interface across applications.
  - Speed up the design time allowing the design team to focus on user needs rather on tiny interaction details.
  - Speed up the development time by reusing the HTML and CSS.


Designers, product managers and anyone that has to define the user interface of a web application we provide the following [design guidelines](https;//unicef.github.io/unicef-design-system/guidlines.html).

For developers, we provide a reference implementation. [Documentation for developers can be found here](https;//unicef.github.io/unicef-design-system/guidlines.html)

This reference implmentation is based on  based on [Bootstrap 4.1](http://getbootstrap.com).


## Usage

### With a CDN

`TODO test  https://www.jsdelivr.com/?`

### CSS

```html
<head>
<!-- include this line within your head element -->
<link rel="stylesheet" type="text/css" href="path/to/dist/css/unicef.css">
</head>

```

If you need to use Javascript
```html
<script src="path/to/dist/js/unicef.js"></script>
```

### Using SASS

This bootstrap customization is based on [SASS](https://sass-lang.com), and therefore you can easily override the CSS classes for your particular project.

First, install the npm package

```
 npm install unicef-design-system

```

Import `unicef.scss` in your global scss file.

```
@import "../node_modules/unicef-ds/scss/unicef"
```

We have used bootstrap variables whenever possible. Custom created variables are defined in `scss/_variables.scss`


## Documentation

### Leaner version.
In order to make bootstrap version leaner, the following colors have been
removed from `$theme-colors`: `secondary`,`info`,`light`,`dark`. This means
that, for example, `<button class="btn btn-info">Info button</button>` will not
work. You can activate them back in `_variables.scss`.


### Development

If you need to further develop this project

Get source code from git repository

```
$ git clone https://github.com/unicef/unicef-design-system.git
```

Install dependencies

```
$ cd unicef-design-system
$ npm install
$ bundle install
```

### Tasks

To run the local server type
```
$ bundle exec jekyll serve --livereload
```
Then browse to `http://localhost:4000/`

To Compile SASS run:
```
$ gulp sass
```

To continuously compile SASS run
```
$ gulp watch-sass

```

# Contribution

Just clone the project and make a pull request.

# License

Distributed under GLPv3.
