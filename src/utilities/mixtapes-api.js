export function getMixtapes() {
    return fetch('/api/mixtapes').then(res => res.json())
}

export function getMixtapeById(id) {
    return fetch(`/api/mixtapes/${id}`).then(res => res.json())
}

export function addMood(moodId, id) {
    try {
        let fetchResponse = fetch(`/api/mixtapes/update/${id}`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    moodId: moodId
                })
            }
            )
            if (!fetchResponse.ok) throw new Error("Fetch failed!")
        } catch (error) {
            console.log("Add mood error ", error)
        }
}