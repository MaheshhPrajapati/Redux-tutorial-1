import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from "../store/counter";


const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector(state => state.counter.showCounter);

  function incHandler() {
    dispatch(counterActions.increment());
  }
  function decHandler() {
    dispatch(counterActions.decrement());
  }
  function increaseHandler() {
    dispatch(counterActions.increase(5));
  }
  function toggleCounterHandler() {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {show && <div>
        <button onClick={decHandler}>-</button>
        <button onClick={increaseHandler}>inc by 5</button>
        <button onClick={incHandler}>+</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
