"use client";
import { useState } from "react";
export default function SuggestElement() {
    const [pnrOrTnum, update] = useState(() => "PNR");
    const [data, changeData] = useState(() => []);
    function suggest(ev) {
        console.log("test");
        if (pnrOrTnum = "PNR") {
            callServer(`suggestpnr?text=${ev.target.value}`).then(res => res.json()).then(res => {
                changeData(res.map(el => {
                    return <div class="suggestEl" onmousedown="enterSuggested(this)">{el}</div>;
                }).join(""));
            });
        } else {
            callServer(`suggesttnum?text=${ev.target.value}`).then(res => res.json()).then(res => {
                changeData(res.map(el => {
                    return <div class="suggestEl" onmousedown="enterSuggested(this)">{el}</div>;
                }).join(""));
            });
        }
    }
    function removeSuggest(){
        changeData(el=>[]);
    }
    return <>
        <div class="searchContainer">
            <select title="search" type="text" id="searchWith" placeholder="issuedFrom">
                <option value="pnr">pnr</option>
                <option value="tkId">TICKET NUM</option>
            </select>
            <input type="text" id="search" placeholder="search" onInput={suggest} onChange={removeSuggest} />
            <div class="suggest">{...data}</div>
            <button onClick={search} id="searchBTN">search</button>
        </div >
    </>;
}