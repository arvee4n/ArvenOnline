// Keychain
const keychain = document.getElementById("keychain");
const keyNum = keychain ? keychain.childElementCount - 1 : 0;
const keySep = 22.5;

// Last.fm initialization function - made available globally to be called by component injector
function initializeLastFm() {
  const lastFmEndpoint = "https://lastfm-last-played.biancarosa.com.br/arvee4n/latest-song";

  fetch(lastFmEndpoint)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      const nowPlaying = json?.track?.["@attr"]?.nowplaying;
      const track = json?.track;
      
      if (nowPlaying && track) {
        document.getElementById("lastfm-cover").src = track.image[2]["#text"] || "";
        document.getElementById("lastfm-track").textContent = track.name || "Unknown Track";
        document.getElementById("lastfm-track").title = track.name || "Unknown Track";
        document.getElementById("lastfm-track").classList.add("output-text");
        document.getElementById("lastfm-artist").textContent = track.artist["#text"] || "Unknown Artist";
        document.getElementById("lastfm-artist").title = track.artist["#text"] || "Unknown Artist";
        document.getElementById("lastfm-artist").classList.add("output-text");
      } else {
        document.getElementById("lastfm-artist").textContent = "Nothing's Playing";
        document.getElementById("lastfm-artist").classList.add("output-text");
      }
    })
    .catch((error) => {
      console.error("Error fetching data from Last.fm:", error);
      document.getElementById("lastfm-artist").textContent = "Error fetching data.";
    });
}

// Execute immediately for backward compatibility
document.addEventListener('DOMContentLoaded', initializeLastFm);