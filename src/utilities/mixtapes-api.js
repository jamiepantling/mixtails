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
}