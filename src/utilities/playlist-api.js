const BASE_URL = "/api/playlist";

export function addPlaylist(user) {
  const options = getOptionsCreate(user);
  return fetch(BASE_URL, options).then((res) => res.json());
}

function getOptionsCreate(user) {
  return {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      link: user.link,
    }),
  };
}
