const url = "http://x.x.x.x:8099/generate"; // IP to be provided during the Hackathon
const api_key = "key2"; // Key to be provided during the Hackathon
const data = "Give me the latest information about...";

fetch(`${url}?data=${encodeURIComponent(data)}`, {
    method: "GET",
    headers: {
        "API-Key": api_key
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Failed to generate text. Status code: ${response.status}`);
    }
})
.then(data => {
    console.log("Generated text:");
    console.log(data.generated_text);
})
.catch(error => {
    console.error(error.message);
});
