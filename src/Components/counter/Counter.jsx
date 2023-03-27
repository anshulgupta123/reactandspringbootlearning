import { useState } from 'react';
import {PropTypes} from 'prop-types'
import './Counter.css'
export default function Counter({ by }) {

    const [count, setCount] = useState(0);
    function incrementCounterFunction() {
        setCount(count + by)
        console.log(count)
    }
    function decrementCountValue() {
        setCount(count - by);
        console.log(count)
    }
    return (
        <div className="Counter">
            <span className="count">{count}</span>
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

Counter.propTypes ={
    by:PropTypes.number
}

Counter.defaultProps ={
    by:5
}
