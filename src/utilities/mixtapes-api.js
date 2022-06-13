const BASE_URL = '/api/mixtapes'

export function getMixtapes() {
    return fetch(BASE_URL).then(res => res.json())
}

export function addPlaylist(link) {
    console.log('In Utils')
  const options = getOptionsCreate(link);
  return fetch(BASE_URL, options).then((res) => res.json());
}

function getOptionsCreate(link) {
  return {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      link,
    }),
  };
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