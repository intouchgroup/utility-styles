# @intouchgroup/utility-styles

🧬 Fully configurable low level utility styles

### Getting Started

1. Install the module in your project:<br>
`npm i @intouchgroup/utility-styles`<br><br>

2. Use the module in your SCSS:<br>
```scss
@use '~@intouchgroup/utility-styles';
```<br><br>

3. Optionally configure the module:<br>
```scss
@use '~@intouchgroup/utility-styles' with (
    // media breakpoints
    $breakpoints: (
        small: 480,
        medium: 896,
        large: 1200,
        xlarge: 1920,
    ),
    // brand colors
    $colors: (
        'blue': #1cb2a9,
        'green': #b2d236,
        'green-light': #a0ce4e,
    ),
    // em-based increments for margin and padding
    $spacing: 0.75,
);
```<br><br>