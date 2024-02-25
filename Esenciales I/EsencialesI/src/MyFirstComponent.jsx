import { useState } from 'react';

const MyFirstComponent = ({ propOne, propTwo, propThree}) => {
    const [value, setValue] = useState(0);
    //const [hola, setHola]= useState("Hola");
    const nombre = "Emmanuel";
    /*
    setTimeout(() => {
        setValue(value + 1);
    }, 3000);

    console.log(value);
    */
    console.log("My first component rendered");
    console.log(propOne, propTwo, propThree);

    return (
        <div id = "1" className="myClassName">
            <p>Hola {nombre}!, este es mi primer componente {value}</p>
        </div>
    );
}

export default MyFirstComponent;