export function getMoods() {
    return fetch('/api/moods').then(res => res.json())
}