import { useState, useEffect } from "react";

export default function Spotify() {
  const CLIENT_ID = String(process.env.SPOTIFY_CLIENT_ID)
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((ele) => ele.startsWith("access_token"))
        .split("=")[1];
      // console.log(token)
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
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
    </div>
  );
}
