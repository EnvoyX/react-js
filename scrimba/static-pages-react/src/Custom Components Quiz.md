1. What is a React component?

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

<!-- Answer -->

1. What is a React component?
   A function that returns React elements. (UI)

2. What's wrong with this code?

```
function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

React component should start with Capital Case

3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(<Header />)
```
