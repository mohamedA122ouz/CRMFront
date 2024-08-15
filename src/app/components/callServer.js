export default function callServer(endPoint, dataObject) {
    if (dataObject) {
        return fetch(`${/*location.origin*/+"localhost:1000"}/${endPoint}`, {
            method: "POST",
            body: JSON.stringify(dataObject),
            headers: { "content-type": "application/json" }
        });
    }
    return fetch(`${location.origin}/${endPoint}`);
}