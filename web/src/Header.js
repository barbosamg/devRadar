import React, {useState} from 'react';

function Header(props) {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter+1);
    }
    // return <h1>{props.teste}</h1>
    return (
        <>
            <h1>Contador : {counter}</h1>
            <button onClick={incrementCounter}>Incrementar</button>
        </>
    );
}

export default Header;