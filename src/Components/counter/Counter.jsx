import { useState } from 'react';
import { PropTypes } from 'prop-types'
import './Counter.css'

export default function Counter() {
    function incrementCountParentFunction(by){
        setCount(count+by)

    }
    function decrementCountParentFunction(by){
        setCount(count-by)

    }

    function someMethodParent(){
        console.log("Parent method called")
    }
    const [count, setCount] = useState(0);
    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCountParentFunction}  decrementMethod={decrementCountParentFunction}></CounterButton>
            <CounterButton by={2} incrementMethod={incrementCountParentFunction} decrementMethod={decrementCountParentFunction}></CounterButton>
            <CounterButton by={3} incrementMethod={incrementCountParentFunction} decrementMethod={decrementCountParentFunction}></CounterButton>
        </>
    );
}

function CounterButton({ by,incrementMethod,decrementMethod }) {

    const [count, setCount] = useState(0);
    function incrementCounterFunction() {
        setCount(count + by)
        incrementMethod(by)
        console.log(count)
    }
    function decrementCountValue() {
        setCount(count - by)
        decrementMethod(by)
        console.log(count)
    }
    return (
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={incrementCounterFunction}
                >+{by}
                </button>
                <button className="counterButton" onClick={decrementCountValue}
                >-{by}
                </button>
            </div>
        </div>
    );
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 5
}
