const BASE_URL = '/api/tags'

export function getTags() {
    return fetch(BASE_URL).then(res => res.json())
}