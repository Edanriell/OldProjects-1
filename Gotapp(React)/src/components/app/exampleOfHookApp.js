import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [data, refreshData] = useState([{name: 'Ivan', sex: 'male'}]);

    // if (data) {
    //     useEffect(() => {
    //         updateChar();
    //         let timerId = setInterval(updateChar, 15000);
    //         return () => {
    //             clearInterval(timerId);
    //         }
    //     }); // randomChar_old componentDidMount and unmount
    // } if not working

    // useEffect(() => {
    //     if(data) {
    //     updateChar();
    //     let timerId = setInterval(updateChar, 15000);
    //     return () => {
    //         clearInterval(timerId);
    //     }
    // }
    // }); // randomChar_old componentDidMount and unmount WORKING IF

    
    useEffect(() => {
        updateChar();
        let timerId = setInterval(updateChar, 15000);
        return () => {
            clearInterval(timerId);
        }
    }); // randomChar_old componentDidMount and unmount

    return (
        <div>
            <p>Вы кликнули {count} раз</p>
            <buttons
            onClick={() => setCount(count + 1)}>Кликни меня</buttons>
            <div>Name: {data[0].namne}, sex:{data[0].sex}</div>
            {data.map(item => {
                return (
                    <div>Name: {item.namne}, sex:{item.sex}</div>
                );
            })}
            <button
            onClick={() => refreshData(data => ([...data, {name: 'Alex', sex: 'male'}]))}>Добавить данные</button>
        </div>
        
    );
}

export default App;