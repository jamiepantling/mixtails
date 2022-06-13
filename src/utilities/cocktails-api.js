const BASE_URL = "/api/cocktails";

export function getCocktails() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function deleteCocktail(cocktailId) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cocktailId,
    }),
  };

  return fetch(BASE_URL, options).then((res) => res.json());
}
