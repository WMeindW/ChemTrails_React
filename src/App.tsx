import React from 'react';
import './App.css';

export default function App() {
    function click(event: React.MouseEvent<HTMLDivElement>) {

    }

    return <div className={"row element-row"}>
        <div onClick={(e) => click(e)} className={"card element-container-blue"}>
            <div className={"element-container-number-blue"}>1</div>
            <div className={"element-container-header-blue"}>H</div>
            <div className={"element-container-weight-blue"}>1.008</div>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-purple"}>
            <div className={"element-container-number-purple"}>2</div>
            <div className={"element-container-header-purple"}>He</div>
            <div className={"element-container-weight-purple"}>4.0026</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-pink"}>
            <div className={"element-container-number-pink"}>3</div>
            <div className={"element-container-header-pink"}>Li</div>
            <div className={"element-container-weight-pink"}>6.94</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-orange"}>
            <div className={"element-container-number-orange"}>4</div>
            <div className={"element-container-header-orange"}>Be</div>
            <div className={"element-container-weight-orange"}>9.0122</div>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
    </div>;
}
