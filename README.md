# Task 3 - Increment and Decrement 

Topics disccues:

1)what is props
2.Props vs State
3.How to use State and props in functional and class based components
4.how to pass props from parent to child and child to parent
5.what is router and react router dom and basic uses of it
## TASK
6.Task given create a react app with two pages home and main page
7.use router in routing these two pages
in the home page create two components A and B and two state variable A and B pass these two to component A and B and show these two in all three component
added increment and decrement buttons for updating there values in all 3 components
and these variable should be common for all the pages


# Hooks

## useState -> 
The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.
-> It re-renders the component when it is updated

### syntax of useState
const [count, setCount] = useState(0);

## useEffect ->
The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
-> It will show its effect for first time when our component render.

### syntax of useEffect
 useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

## useRef ->
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
-> it will no re-render our component.

### syntax of useRef
 const refContainer = useRef(initialValue);

