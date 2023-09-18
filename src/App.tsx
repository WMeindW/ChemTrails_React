import React, {useState} from 'react';
import Home from "./components/Home";
import Info from "./components/Info";

export default function App() {
    const [state, SetState] = useState(<Home onRedirect={(div) => redirect(div)}></Home>);

    function redirect(div: HTMLDivElement) {
        console.log(div.childNodes[0].textContent);
        $.get("https://pubchem.ncbi.nlm.nih.gov/periodic-table/#popup=" + div.childNodes[0].textContent, (data: string) => {
            SetState(<Info html={data}
                           onRedirect={() => SetState(<Home onRedirect={(div) => redirect(div)}></Home>)}></Info>)
        }).fail(() => alert("Network Error"));
    }

    return state;
}
