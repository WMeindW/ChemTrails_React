import {useState} from "react";
import "./Info.css";

interface Props {
    onRedirect: (div: HTMLDivElement) => void;
    div: HTMLDivElement;
}

export default function Info(props: Props) {
    const [name, setName] = useState("");
    const [atomicNumber, setAtomicNumber] = useState("");
    const [atomicMass, setAtomicMass] = useState("");
    const [electronConfiguration, setElectronConfiguration] = useState("");
    const [electroNegativity, setElectroNegativity] = useState("");
    const [atomicRadius, setAtomicRadius] = useState("");
    const [ionizationEnergy, setIonizationEnergy] = useState("");
    const [electronAffinity, setElectronAffinity] = useState("");
    const [oxidationStates, setOxidationStates] = useState("");
    const [standardState, setStandardState] = useState("");
    const [meltingPoint, setMeltingPoint] = useState("");
    const [boilingPoint, setBoilingPoint] = useState("");
    const [density, setDensity] = useState("");
    const [group, setGroup] = useState("");
    const [discovered, setDiscovered] = useState("");
    const [text, setText] = useState("");

    $.get("https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON", (data) => {
        let elements: string[] = JSON.stringify(data).split("\"Row\":[")[1].split("\"Cell\":");
        let info: string[] = elements[Number(props.div.childNodes[0].textContent)].split("\",\"");
        setName(info[2]);
        setAtomicNumber(info[0].replace("[\"", ""));
        setAtomicMass(info[3]);
        setElectronConfiguration(info[5]);
        setElectroNegativity(info[6]);
        setAtomicRadius(info[7]);
        setIonizationEnergy(info[8]);
        setElectronAffinity(info[9]);
        setOxidationStates(info[10]);
        setStandardState(info[11]);
        setMeltingPoint(info[12] + " K");
        setBoilingPoint(info[13] + " K");
        setDensity(info[14]);
        setGroup(info[15]);
        setDiscovered(info[16].replace("\"]},{", ""));
        $.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + name.replaceAll("\"", ""), (data) => {
            setText(JSON.stringify(data).split("\"extract\":\"")[1].split("\",\"extract_html\"")[0]);
        });
    });
    return <div className="row info-row">
        <div className="card info-card">
            <div className="info-card-header">Name: {name}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Atomic Number: {atomicNumber}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Atomic Mass: {atomicMass}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Electron Configuration: {electronConfiguration}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Electro-Negativity: {electroNegativity}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Atomic Radius: {atomicRadius}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Ionization Energy: {ionizationEnergy}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Electron Affinity: {electronAffinity}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Oxidation States: {oxidationStates}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Standard State: {standardState}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Melting Point: {meltingPoint}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Boiling Point: {boilingPoint}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Density: {density}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Group: {group}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">Discovered: {discovered}</div>
        </div>
        <div className="card info-card">
            <div className="info-card-header">{text}</div>
        </div>
    </div>;
}