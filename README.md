# Experiment into react hooks

## y tho

The other day I was using react hooks properly for the first time and noticed that a function wasn't running in a click handler.

The function call depended on a state variable being a certain value.

Silly old me had put the conditional check inside the click handler, which was forming a closure with the old value of state.

I ended up using the `useEffect` hook to solve the problem because, when I moved the functional call outside the click handler, the function was being called twice. Turns out this was just strict mode doing it's thing.

In development mode, strict mode calls the following methods twice **on purpose**. [TBF they do say that in the docs](https://reactjs.org/docs/strict-mode.html).

- Class component constructor, render, and shouldComponentUpdate methods
- Class component static getDerivedStateFromProps method
- Function component bodies
- State updater functions (the first argument to setState)
- Functions passed to useState, useMemo, or useReducer

Huge lols all round.
