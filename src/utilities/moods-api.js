const BASE_URL = '/api/moods'

export function getMoods() {
    return fetch(BASE_URL).then(res => res.json())
}