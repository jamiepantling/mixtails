export function getTags() {
    return fetch('/api/tags').then(res => res.json())
}