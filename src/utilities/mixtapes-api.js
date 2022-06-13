const BASE_URL = "/api/mixtapes";

export function getMixtapes() {
    return fetch(BASE_URL).then(res => res.json())
}

export function getMixtapeById(id) {
  return fetch(`${BASE_URL}/${id}`).then((res) => res.json());
}

export function createMixtape(/* get arguments */) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //add mood(s)
      //add playlist link
      //add cocktails
    }),
  };

  try {
    let fetchResponse = fetch(`${BASE_URL}`, options);
    if (!fetchResponse.ok) throw new Error("Fetch Failed!");
  } catch (error) {
    console.log(("Mixtape Error: ", error));
  }
}

export function addMood(moodId, id) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      moodId: moodId,
    }),
  };

  try {
    let fetchResponse = fetch(`${BASE_URL}/update/${id}`, options);
    if (!fetchResponse.ok) throw new Error("Fetch failed!");
  } catch (error) {
    console.log("Add mood error ", error);
  }
}

export function addPlaylist(link) {
  const options = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      link,
    }),
  };

  return fetch(BASE_URL, options).then((res) => res.json());
}
