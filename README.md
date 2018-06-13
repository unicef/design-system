# UNICEF Design System

The goal is to:

  - Define a common user interface across applications.
  - Speed up the design time allowing the design team to focus on user needs rather on tiny interaction details.
  - Speed up the development time by reusing the HTML and CSS.

## Usage

Include files in your HTML

TODO test  https://www.jsdelivr.com/?


### Using SASS

First, install the npm package

```
 npm install unicef-ds

```

Import unicef.scss

```
@import "../node_modules/unicef-ds/scss/unicef"
```


## Documentation


## SCSS Overrides
We have used bootstrap variables whenever possible. Custom created variables
are defined in `scss/_variables.scss`


## Leaner version.
In order to make bootstrap version leaner, the following colors have been
removed from `$theme-colors`: `secondary`,`info`,`light`,`dark`. This means
that, for example, `<button class="btn btn-info">Info button</button>` will not
work. You can activate them back in `_variables.scss`.


## Development

### Download

Get source code from git repository

```
git clone ...

```

Install dependencies

```
cd unicef-ds
npm install

```

### Tasks

Compile SASS
```
   gulp sass
```

During development it will display
```
   gulp watch-sass

```

Update docs



# Related projects


# License

GLPv3
