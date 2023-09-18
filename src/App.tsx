import React, {useState} from "react";
import Home from "./components/Home";
import Info from "./components/Info";

export default function App() {
    const [state, SetState] = useState(<Home onRedirect={(div) => redirect(div)}></Home>);
    const [info, setInfo] = useState("");
    function redirect(div: HTMLDivElement) {
        SetState(<Info onRedirect={() => SetState(<Home onRedirect={(div) => redirect(div)}></Home>)}
                       div={div}></Info>);
    }
    return state;
}
