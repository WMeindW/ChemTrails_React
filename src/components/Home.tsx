import React from "react";
import './Home.css';

interface Props {
    onRedirect: (div: HTMLDivElement) => void;
}

export default function Home(props: Props) {

    function click(event: React.MouseEvent<HTMLDivElement>) {
        props.onRedirect(event.currentTarget);
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
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>5</div>
            <div className={"element-container-header-lblue"}>B</div>
            <div className={"element-container-weight-lblue"}>10.811</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-blue"}>
            <div className={"element-container-number-blue"}>6</div>
            <div className={"element-container-header-blue"}>C</div>
            <div className={"element-container-weight-blue"}>12.0107</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-blue"}>
            <div className={"element-container-number-blue"}>7</div>
            <div className={"element-container-header-blue"}>N</div>
            <div className={"element-container-weight-blue"}>14.0067</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-blue"}>
            <div className={"element-container-number-blue"}>8</div>
            <div className={"element-container-header-blue"}>O</div>
            <div className={"element-container-weight-blue"}>15.9994</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lpurple"}>
            <div className={"element-container-number-lpurple"}>9</div>
            <div className={"element-container-header-lpurple"}>F</div>
            <div className={"element-container-weight-lpurple"}>18.9984</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-purple"}>
            <div className={"element-container-number-purple"}>10</div>
            <div className={"element-container-header-purple"}>Ne</div>
            <div className={"element-container-weight-purple"}>20.1797</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-pink"}>
            <div className={"element-container-number-pink"}>11</div>
            <div className={"element-container-header-pink"}>Na</div>
            <div className={"element-container-weight-pink"}>22.9897</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-orange"}>
            <div className={"element-container-number-orange"}>12</div>
            <div className={"element-container-header-orange"}>Mg</div>
            <div className={"element-container-weight-orange"}>24.305</div>
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
        <div onClick={(e) => click(e)} className={"card element-container-green"}>
            <div className={"element-container-number-green"}>13</div>
            <div className={"element-container-header-green"}>Al</div>
            <div className={"element-container-weight-green"}>26.9815</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>14</div>
            <div className={"element-container-header-lblue"}>Si</div>
            <div className={"element-container-weight-lblue"}>28.0855</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-blue"}>
            <div className={"element-container-number-blue"}>15</div>
            <div className={"element-container-header-blue"}>P</div>
            <div className={"element-container-weight-blue"}>30.9737</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-blue"}>
            <div className={"element-container-number-blue"}>16</div>
            <div className={"element-container-header-blue"}>S</div>
            <div className={"element-container-weight-blue"}>32.065</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lpurple"}>
            <div className={"element-container-number-lpurple"}>17</div>
            <div className={"element-container-header-lpurple"}>Cl</div>
            <div className={"element-container-weight-lpurple"}>35.453</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-purple"}>
            <div className={"element-container-number-purple"}>18</div>
            <div className={"element-container-header-purple"}>Ar</div>
            <div className={"element-container-weight-purple"}>39.947</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-pink"}>
            <div className={"element-container-number-pink"}>19</div>
            <div className={"element-container-header-pink"}>K</div>
            <div className={"element-container-weight-pink"}>39.0983</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-orange"}>
            <div className={"element-container-number-orange"}>20</div>
            <div className={"element-container-header-orange"}>Ca</div>
            <div className={"element-container-weight-orange"}>40.078</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>21</div>
            <div className={"element-container-header-yellow"}>Sc</div>
            <div className={"element-container-weight-yellow"}>44.9559</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>22</div>
            <div className={"element-container-header-yellow"}>Ti</div>
            <div className={"element-container-weight-yellow"}>47.867</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>23</div>
            <div className={"element-container-header-yellow"}>V</div>
            <div className={"element-container-weight-yellow"}>50.9415</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>24</div>
            <div className={"element-container-header-yellow"}>Cr</div>
            <div className={"element-container-weight-yellow"}>51.9961</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>25</div>
            <div className={"element-container-header-yellow"}>Mn</div>
            <div className={"element-container-weight-yellow"}>54.9380</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>26</div>
            <div className={"element-container-header-yellow"}>Fe</div>
            <div className={"element-container-weight-yellow"}>55.845</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>27</div>
            <div className={"element-container-header-yellow"}>Co</div>
            <div className={"element-container-weight-yellow"}>58.9331</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>28</div>
            <div className={"element-container-header-yellow"}>Ni</div>
            <div className={"element-container-weight-yellow"}>58.6934</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>29</div>
            <div className={"element-container-header-yellow"}>Cu</div>
            <div className={"element-container-weight-yellow"}>63.546</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>30</div>
            <div className={"element-container-header-yellow"}>Zn</div>
            <div className={"element-container-weight-yellow"}>63.38</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green"}>
            <div className={"element-container-number-green"}>31</div>
            <div className={"element-container-header-green"}>Ga</div>
            <div className={"element-container-weight-green"}>69.729</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>32</div>
            <div className={"element-container-header-lblue"}>Ge</div>
            <div className={"element-container-weight-lblue"}>72.64</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>33</div>
            <div className={"element-container-header-lblue"}>As</div>
            <div className={"element-container-weight-lblue"}>74.9216</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-blue"}>
            <div className={"element-container-number-blue"}>34</div>
            <div className={"element-container-header-blue"}>Se</div>
            <div className={"element-container-weight-blue"}>78.96</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lpurple"}>
            <div className={"element-container-number-lpurple"}>35</div>
            <div className={"element-container-header-lpurple"}>Br</div>
            <div className={"element-container-weight-lpurple"}>79.904</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-purple"}>
            <div className={"element-container-number-purple"}>36</div>
            <div className={"element-container-header-purple"}>Kr</div>
            <div className={"element-container-weight-purple"}>83.798</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-pink"}>
            <div className={"element-container-number-pink"}>37</div>
            <div className={"element-container-header-pink"}>Rb</div>
            <div className={"element-container-weight-pink"}>85.4678</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-orange"}>
            <div className={"element-container-number-orange"}>38</div>
            <div className={"element-container-header-orange"}>Sr</div>
            <div className={"element-container-weight-orange"}>87.62</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>39</div>
            <div className={"element-container-header-yellow"}>Y</div>
            <div className={"element-container-weight-yellow"}>88.9058</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>40</div>
            <div className={"element-container-header-yellow"}>Zr</div>
            <div className={"element-container-weight-yellow"}>91.224</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>41</div>
            <div className={"element-container-header-yellow"}>Nb</div>
            <div className={"element-container-weight-yellow"}>92.9063</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>42</div>
            <div className={"element-container-header-yellow"}>Mo</div>
            <div className={"element-container-weight-yellow"}>95.96</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>43</div>
            <div className={"element-container-header-yellow"}>Tc</div>
            <div className={"element-container-weight-yellow"}>98</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>44</div>
            <div className={"element-container-header-yellow"}>Ru</div>
            <div className={"element-container-weight-yellow"}>101.07</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>45</div>
            <div className={"element-container-header-yellow"}>Rh</div>
            <div className={"element-container-weight-yellow"}>102.905</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>46</div>
            <div className={"element-container-header-yellow"}>Pd</div>
            <div className={"element-container-weight-yellow"}>106.42</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>47</div>
            <div className={"element-container-header-yellow"}>Ag</div>
            <div className={"element-container-weight-yellow"}>107.868</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>48</div>
            <div className={"element-container-header-yellow"}>Cd</div>
            <div className={"element-container-weight-yellow"}>112.411</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green"}>
            <div className={"element-container-number-green"}>49</div>
            <div className={"element-container-header-green"}>In</div>
            <div className={"element-container-weight-green"}>114.818</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green"}>
            <div className={"element-container-number-green"}>50</div>
            <div className={"element-container-header-green"}>Sn</div>
            <div className={"element-container-weight-green"}>118.71</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>51</div>
            <div className={"element-container-header-lblue"}>Sb</div>
            <div className={"element-container-weight-lblue"}>121.76</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>52</div>
            <div className={"element-container-header-lblue"}>Te</div>
            <div className={"element-container-weight-lblue"}>127.6</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lpurple"}>
            <div className={"element-container-number-lpurple"}>53</div>
            <div className={"element-container-header-lpurple"}>I</div>
            <div className={"element-container-weight-lpurple"}>126.904</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-purple"}>
            <div className={"element-container-number-purple"}>54</div>
            <div className={"element-container-header-purple"}>Xe</div>
            <div className={"element-container-weight-purple"}>131.293</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-pink"}>
            <div className={"element-container-number-pink"}>55</div>
            <div className={"element-container-header-pink"}>Cs</div>
            <div className={"element-container-weight-pink"}>132.905</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-orange"}>
            <div className={"element-container-number-orange"}>56</div>
            <div className={"element-container-header-orange"}>Ba</div>
            <div className={"element-container-weight-orange"}>137.327</div>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>72</div>
            <div className={"element-container-header-yellow"}>Hf</div>
            <div className={"element-container-weight-yellow"}>178.49</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>73</div>
            <div className={"element-container-header-yellow"}>Ta</div>
            <div className={"element-container-weight-yellow"}>92.9063</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>74</div>
            <div className={"element-container-header-yellow"}>W</div>
            <div className={"element-container-weight-yellow"}>183.84</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>75</div>
            <div className={"element-container-header-yellow"}>Re</div>
            <div className={"element-container-weight-yellow"}>186.207</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>76</div>
            <div className={"element-container-header-yellow"}>Os</div>
            <div className={"element-container-weight-yellow"}>190.23</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>77</div>
            <div className={"element-container-header-yellow"}>Ir</div>
            <div className={"element-container-weight-yellow"}>192.217</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>78</div>
            <div className={"element-container-header-yellow"}>Pt</div>
            <div className={"element-container-weight-yellow"}>195.084</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>79</div>
            <div className={"element-container-header-yellow"}>Au</div>
            <div className={"element-container-weight-yellow"}>196.966</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow"}>
            <div className={"element-container-number-yellow"}>80</div>
            <div className={"element-container-header-yellow"}>Hg</div>
            <div className={"element-container-weight-yellow"}>200.59</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green"}>
            <div className={"element-container-number-green"}>81</div>
            <div className={"element-container-header-green"}>Ti</div>
            <div className={"element-container-weight-green"}>204.383</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green"}>
            <div className={"element-container-number-green"}>82</div>
            <div className={"element-container-header-green"}>Pb</div>
            <div className={"element-container-weight-green"}>207.2</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green"}>
            <div className={"element-container-number-green"}>83</div>
            <div className={"element-container-header-green"}>Bi</div>
            <div className={"element-container-weight-green"}>208.980</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>84</div>
            <div className={"element-container-header-lblue"}>Po</div>
            <div className={"element-container-weight-lblue"}>209</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lpurple radioactive"}>
            <div className={"element-container-number-lpurple"}>85</div>
            <div className={"element-container-header-lpurple"}>At</div>
            <div className={"element-container-weight-lpurple"}>210</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-purple radioactive"}>
            <div className={"element-container-number-purple"}>86</div>
            <div className={"element-container-header-purple"}>Rn</div>
            <div className={"element-container-weight-purple"}>222</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-pink radioactive"}>
            <div className={"element-container-number-pink"}>87</div>
            <div className={"element-container-header-pink"}>Fr</div>
            <div className={"element-container-weight-pink"}>223</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-orange radioactive"}>
            <div className={"element-container-number-orange"}>88</div>
            <div className={"element-container-header-orange"}>Ra</div>
            <div className={"element-container-weight-orange"}>226</div>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>104</div>
            <div className={"element-container-header-yellow"}>Rf</div>
            <div className={"element-container-weight-yellow"}>267</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>105</div>
            <div className={"element-container-header-yellow"}>Db</div>
            <div className={"element-container-weight-yellow"}>268</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>106</div>
            <div className={"element-container-header-yellow"}>Sg</div>
            <div className={"element-container-weight-yellow"}>271</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>107</div>
            <div className={"element-container-header-yellow"}>Bh</div>
            <div className={"element-container-weight-yellow"}>272</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>108</div>
            <div className={"element-container-header-yellow"}>Hs</div>
            <div className={"element-container-weight-yellow"}>270</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>109</div>
            <div className={"element-container-header-yellow"}>Mt</div>
            <div className={"element-container-weight-yellow"}>276</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>110</div>
            <div className={"element-container-header-yellow"}>Ds</div>
            <div className={"element-container-weight-yellow"}>281</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>111</div>
            <div className={"element-container-header-yellow"}>Rg</div>
            <div className={"element-container-weight-yellow"}>280</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-yellow radioactive"}>
            <div className={"element-container-number-yellow"}>112</div>
            <div className={"element-container-header-yellow"}>Cn</div>
            <div className={"element-container-weight-yellow"}>285</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green radioactive"}>
            <div className={"element-container-number-green"}>113</div>
            <div className={"element-container-header-green"}>Nh</div>
            <div className={"element-container-weight-green"}>286</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green radioactive"}>
            <div className={"element-container-number-green"}>114</div>
            <div className={"element-container-header-green"}>Fl</div>
            <div className={"element-container-weight-green"}>289</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green radioactive"}>
            <div className={"element-container-number-green"}>115</div>
            <div className={"element-container-header-green"}>Mc</div>
            <div className={"element-container-weight-green"}>290</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-green radioactive"}>
            <div className={"element-container-number-green"}>116</div>
            <div className={"element-container-header-green"}>Lv</div>
            <div className={"element-container-weight-green"}>293</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lpurple radioactive"}>
            <div className={"element-container-number-lpurple"}>117</div>
            <div className={"element-container-header-lpurple"}>Ts</div>
            <div className={"element-container-weight-lpurple"}>294</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-purple radioactive"}>
            <div className={"element-container-number-purple"}>118</div>
            <div className={"element-container-header-purple"}>Og</div>
            <div className={"element-container-weight-purple"}>294</div>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>57</div>
            <div className={"element-container-header-lblue"}>La</div>
            <div className={"element-container-weight-lblue"}>138.905</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>58</div>
            <div className={"element-container-header-lblue"}>Ce</div>
            <div className={"element-container-weight-lblue"}>140.116</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>59</div>
            <div className={"element-container-header-lblue"}>Pr</div>
            <div className={"element-container-weight-lblue"}>140.907</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>60</div>
            <div className={"element-container-header-lblue"}>Nd</div>
            <div className={"element-container-weight-lblue"}>144.242</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>61</div>
            <div className={"element-container-header-lblue"}>Pm</div>
            <div className={"element-container-weight-lblue"}>145</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>62</div>
            <div className={"element-container-header-lblue"}>Sm</div>
            <div className={"element-container-weight-lblue"}>150.36</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>63</div>
            <div className={"element-container-header-lblue"}>Eu</div>
            <div className={"element-container-weight-lblue"}>151.964</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>64</div>
            <div className={"element-container-header-lblue"}>Gd</div>
            <div className={"element-container-weight-lblue"}>157.25</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>65</div>
            <div className={"element-container-header-lblue"}>Tb</div>
            <div className={"element-container-weight-lblue"}>158.925</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>66</div>
            <div className={"element-container-header-lblue"}>Dy</div>
            <div className={"element-container-weight-lblue"}>162.5</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>67</div>
            <div className={"element-container-header-lblue"}>Ho</div>
            <div className={"element-container-weight-lblue"}>164.930</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>68</div>
            <div className={"element-container-header-lblue"}>Er</div>
            <div className={"element-container-weight-lblue"}>167.259</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>69</div>
            <div className={"element-container-header-lblue"}>Tm</div>
            <div className={"element-container-weight-lblue"}>168.934</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>70</div>
            <div className={"element-container-header-lblue"}>Yb</div>
            <div className={"element-container-weight-lblue"}>173.054</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue"}>
            <div className={"element-container-number-lblue"}>71</div>
            <div className={"element-container-header-lblue"}>Lu</div>
            <div className={"element-container-weight-lblue"}>174.966</div>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>89</div>
            <div className={"element-container-header-lblue"}>Ac</div>
            <div className={"element-container-weight-lblue"}>227</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>90</div>
            <div className={"element-container-header-lblue"}>Th</div>
            <div className={"element-container-weight-lblue"}>232.038</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>91</div>
            <div className={"element-container-header-lblue"}>Pa</div>
            <div className={"element-container-weight-lblue"}>231.035</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>92</div>
            <div className={"element-container-header-lblue"}>U</div>
            <div className={"element-container-weight-lblue"}>238.028</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>93</div>
            <div className={"element-container-header-lblue"}>Np</div>
            <div className={"element-container-weight-lblue"}>237</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>94</div>
            <div className={"element-container-header-lblue"}>Pu</div>
            <div className={"element-container-weight-lblue"}>244</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>95</div>
            <div className={"element-container-header-lblue"}>Am</div>
            <div className={"element-container-weight-lblue"}>243</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>96</div>
            <div className={"element-container-header-lblue"}>Cm</div>
            <div className={"element-container-weight-lblue"}>247</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>97</div>
            <div className={"element-container-header-lblue"}>Bk</div>
            <div className={"element-container-weight-lblue"}>247</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>98</div>
            <div className={"element-container-header-lblue"}>Cf</div>
            <div className={"element-container-weight-lblue"}>251</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>99</div>
            <div className={"element-container-header-lblue"}>Es</div>
            <div className={"element-container-weight-lblue"}>252</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>100</div>
            <div className={"element-container-header-lblue"}>Fm</div>
            <div className={"element-container-weight-lblue"}>257</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>101</div>
            <div className={"element-container-header-lblue"}>Md</div>
            <div className={"element-container-weight-lblue"}>258</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>102</div>
            <div className={"element-container-header-lblue"}>No</div>
            <div className={"element-container-weight-lblue"}>262</div>
        </div>
        <div onClick={(e) => click(e)} className={"card element-container-lblue radioactive"}>
            <div className={"element-container-number-lblue"}>103</div>
            <div className={"element-container-header-lblue"}>Lr</div>
            <div className={"element-container-weight-lblue"}>262</div>
        </div>
        <div className={"card element-container-transparent"}>
        </div>
    </div>;
}