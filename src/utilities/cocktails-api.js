const BASE_URL = "/api/cocktails";

export function getCocktails() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function deleteCocktail(cocktailId) {
  console.log("utils function");
  const options = getOptionsDelete();
  // CHECK THIS - TO UNDERSTAND WHY NEEDS TO BE IN AN OBJECT 
  options.body = JSON.stringify({ cocktailId })
  console.log(options);
  return fetch(`${BASE_URL}/delete`, options).then((res) => res.json());
}

function getOptionsDelete() {
  return {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${getToken()}`
    },
  };
}
