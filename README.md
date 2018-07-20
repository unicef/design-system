# UNICEF Design System

The status of this project is **ALFA**. So, incompatible changes may appear.

The goal of this project is to:

  - Define a common user interface across applications.
  - Speed up the design time allowing the design team to focus on user needs rather on tiny interaction details.
  - Speed up the development time by reusing the HTML and CSS.


Designers and product managers, please refer to the Design Guidelines (TODO: add link).

For developers, we provide a reference implementation based on [Bootstrap](http://getbootstrap.com).


## Usage

Include files in your HTML:

//TODO test  https://www.jsdelivr.com/?


### Using SASS

Bootstrap customization is based on [SASS](https://sass-lang.com), and therefore you can easily override the CSS classes for your particular project.

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

#### Download

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



# License

Distributerd under GLPv3
