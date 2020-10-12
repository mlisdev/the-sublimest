const BASE_URL =
  process.env.BASE_URL|| "http://localhost:3001/api/hikingproject";

export async function getAllTrails() {
  const res = await fetch(`${BASE_URL}/get-trails?lat=${lat}&lon=${lon}&maxDistance=${maxDistance}&key=${API_KEY}`, { mode: "cors" });
  return res.json();
}

export async function getTrailDetails(idx) {
  const res = await fetch(`${BASE_URL}/get-trails-by-id?id=${id}&key=${API_KEY}`, { mode: "cors" });
  return res.json();
}

export function searchTrails() { }

