"use client";
import callServer from "../callServer";
import { useState } from "react";
function Header() {
    const [choosen,changeChoosen] = useState(()=>null);
    async function search(ev) {
        let searchWith = document.querySelector("#searchWith");
        let search = document.querySelector("#search");
        let d = {};
        d[searchWith.value] = search.value;
        d.token = changeDataObject.token;
        if (searchWith.value === "pnr")
            callServer("searchpnr", d).then(res => res.json()).then(res => { processData(res); });
        else
            callServer("searchtk", d).then(res => res.json()).then(res => { processData(res); });
    }

    return <header>
        <ul class="ulHead">
            <li>home</li>
            <li>reports</li>
            <li>visa</li>
            <li></li>
        </ul>
    </header >
}