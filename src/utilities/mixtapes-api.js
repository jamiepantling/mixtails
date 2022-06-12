const BASE_URL = '/api/mixtapes'

export function getMixtapes() {
    return fetch(BASE_URL).then(res => res.json())
}