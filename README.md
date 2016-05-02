# Lonely Knight

This is a follow-through of Dan Abramov's [React DnD tutorial](http://gaearon.github.io/react-dnd/docs-tutorial.html). It renders a knight that can be drag-and-dropped on a chessboard.

This repo was initialized with Dan's [React Hot Reloader](https://github.com/gaearon/react-hot-loader). This sets up Babel, webpack, and live-reloading of React components in the browser.

## Setup

```
npm install
npm start
open http://localhost:3000
```

## Best Practices

I highly recommend following along with Dan's React DnD tutorial because it walks you through some excellent guidelines for thinking in React.

1. Build components *from the bottom up*. For example, in this repo we have three components: Knight, Square, and Board. Starting from the smallest component allows you to immediately view it and test that it is working.

2. Use ```PropTypes``` to add type control to props being passed into components. React will then produce useful error messaging in the browser console as you develop, if you ever receive a prop with the wrong type.

        import React, { Component } from 'react';
        export default class Square extends Component {
          // Square has a property on this.props called black
          // black should be a boolean value
        }
        Square.propTypes = {
          black: PropTypes.bool
        }