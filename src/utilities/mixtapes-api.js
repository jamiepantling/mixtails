export function getMixtapes() {
    return fetch('/api/mixtapes').then(res => res.json())
}