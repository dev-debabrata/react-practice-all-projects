import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className="mx-auto mt-20 w-160 rounded-lg bg-[#f4f0fa] p-4 text-center shadow-md">
      <h1 className="m-0 text-sm uppercase text-gray-600">
        Redux Counter
      </h1>
      {show &&
        <div className="my-8 text-2xl font-bold text-[#3c0080]">
          {counter}
        </div>}
      <div>
        <button
          onClick={incrementHandler}
          className=" m-4 cursor-pointer rounded-md border border-[#3c0080] bg-[#3c0080] px-6 py-2 text-white font-inherit hover:bg-[#5b14ac] hover:border-[#5b14ac] active:bg-[#5b14ac] active:border-[#5b14ac]">
          Increment
        </button>
        <button
          onClick={increaseHandler}
          className=" m-4 cursor-pointer rounded-md border border-[#3c0080] bg-[#3c0080] px-6 py-2 text-white font-inherit hover:bg-[#5b14ac] hover:border-[#5b14ac] active:bg-[#5b14ac] active:border-[#5b14ac]">
          Increase by 10
        </button>
        <button
          onClick={decrementHandler}
          className=" m-4 cursor-pointer rounded-md border border-[#3c0080] bg-[#3c0080] px-6 py-2 text-white font-inherit hover:bg-[#5b14ac] hover:border-[#5b14ac] active:bg-[#5b14ac] active:border-[#5b14ac]">
          Decrement
        </button>
      </div>
      <button
        onClick={toggleCounterHandler}
        className=" m-4 cursor-pointer rounded-md border border-[#3c0080] bg-[#3c0080] px-6 py-2 text-white font-inherit hover:bg-[#5b14ac] hover:border-[#5b14ac] active:bg-[#5b14ac] active:border-[#5b14ac]">
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
