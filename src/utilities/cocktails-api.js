export function getCocktails() {
    return fetch('/api/cocktails').then(res => res.json())
}