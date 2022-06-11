import { useState, useEffect } from "react";
import axios from "axios";

export default function Spotify() {
  // CHECK THIS: Create React App(CRA) enforces the prefix REACT_APP
  //  on every custom variable. Please note that variables without
  // the prefix are ignored during bundling.

  const CLIENT_ID = String(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((ele) => ele.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault()
    
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    })

    console.log(data)
  }

  return (
    <div>
      Spotify
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
      {token ? (
        <form onSubmit={searchArtists}>
          <input type="text" onChange={(e => setSearchKey(e.target.value))}/>
          <button type="submit">Search</button>
        </form>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}
