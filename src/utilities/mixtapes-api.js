export function getMixtapes() {
    return fetch('/api/mixtapes').then(res => res.json())
}

export function getMixtapeById(id) {
    console.log("fetching for id: " + id)
    return fetch(`/api/mixtapes/${id}`).then(res => res.json())
}