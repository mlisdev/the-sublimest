const API_KEY = process.env.API_KEY;

export function searchAPI(searchItems) {
    return fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${maxDistance}&key=${API_KEY}`)
        .then(res => res.json())
}