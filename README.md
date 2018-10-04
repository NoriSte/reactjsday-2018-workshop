# ReactJSDay 2018, React Advanced Patterns & Techniques
Thursday, 4th October 2018

[Link to the training page](https://2018.reactjsday.it/training.html)

This repository contains all the commits made during the workshop, below you can find the exercises list.


## Higher Order Components
[Slides](https://slides.reactacademy.io/presentation/higher-order-components/)

ex. 1: [Download](https://github.com/NoriSte/reactjsday-2018-workshop/releases/tag/higher-order-components-ex1)
- Create a HOC called `withMouse`
- It should send the mouse position (`x` and `y`) to the underlying component as props



ex. 2: [Download](https://github.com/NoriSte/reactjsday-2018-workshop/releases/tag/higher-order-components-ex2)
- Write a HOC called `measureTime` that will measure the time while a component is mounted
- This HOC should pass a `secondsPassed` prop to the original component



ex. 3: [Download](https://github.com/NoriSte/reactjsday-2018-workshop/releases/tag/higher-order-components-ex3)
- Create the `fetchData` HOC.
- Note that this HOC should also accept an url so you need to create a function that returns a HOC that returns a component… fun right?
- Fetch real data using `window.fetch`, you can use the Star Wars api: `https://swapi.co/api/people/1`
- Example usage: `const WrappedApp = fetchData('https://swapi.co/api/people/1')(App);`



## Render Props
[Slides](https://slides.reactacademy.io/presentation/render-props/)

ex. 1: [Download](https://github.com/NoriSte/reactjsday-2018-workshop/releases/tag/render-props-ex1)
- Recreate all the HOCs that we made, but using render props.
- The components should be `FetchData`, `MeasureTime` and `MouseTracker` and they should be in a `components` folder
- You can use the `render` or the `children` prop, it doesn’t matter.
- Use all of them in `App.js`


ex. 2: [Download](https://github.com/NoriSte/reactjsday-2018-workshop/releases/tag/render-props-ex2)
- Create a `KeyLogger` component that’s gonna use render props
- Focus the `KeyLogger` component when it mounts (you can use refs for this) and set the `tabIndex` to 0
- When the user types something, pass `lastKeystroke` and `typedText` to the children
- Don’t save `Backspace`, `Enter` and `Escape` in the `typedText` prop, but show them in `lastKeystroke`
- Hint: use `onKeyDown` to capture keyboard events
- Make sure this component wraps everything in `App`



## Compound components
[Slides](https://slides.reactacademy.io/presentation/compound-components/)

ex. 1: [Download](https://github.com/NoriSte/reactjsday-2018-workshop/releases/tag/compound-components-ex1)
- For this excercise you need to create two components: `Select` and `Option`
Usage:
- The `Option` component should be a functional component, and it should only receive props: `onSelect`, `children` and `active`
- The `Select` component should be a compound component, and it should have two states: when it’s opened and closed.
- You should keep an `opened` property in the state of the `Select` component, but the `Option` component shouldn’t care about it
- `Select` should accept a `defaultValue` prop which will set the initial value
- If `Select` is closed, it should display the currently selected `option`
- When clicking on `Select` it should present all the other options, and the selected `option` should be highlighted
- When clicking on an `option`, the state should be updated in `Select`
- To pass the state from `Select` to `Option` you should use the `React.cloneElement()` api



## Controlled Components
[Slides](https://slides.reactacademy.io/presentation/controlled-components/)

ex. 1: [Download](https://github.com/NoriSte/reactjsday-2018-workshop/releases/tag/controlled-components-ex1)
- Make the `Select` component controlled.
- It should accept the following props: `value`, `opened`, `onSelect`, `onOpen`
- Inside of it, check on every click if the component is controlled or not
- If the component is controlled, you should just call the callbacks (`onSelect`, `onClick`) etc
- If the component is not controlled, you should change the state internally
- If the component is controlled, make sure to compare to the outside props `value` and `opened` instead of comparing to the internal state
- Keep the state of the Select inside of the `App` component, and just pass it down to `Select` to make it controlled
