//Counter.js

function Counter({count, onIncrement,onDecrement}){
    
    return (
        <div>
            <h5>Count: {count}</h5>
            <button onClick={onIncrement} className="btn btn-primary btn-sm">Increment</button>
            <button onClick={onDecrement} className="btn btn-danger btn-sm">Decrement</button>
        </div>
    )
}

export default Counter;