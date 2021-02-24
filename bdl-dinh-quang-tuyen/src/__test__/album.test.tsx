import React from "react";
import ReactDOM from "react-dom";
import Album from "../components/album/album";

const album = { "im:name": { "label": "Starting Over" }, "im:image": [{ "label": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/0e/e1/be/0ee1bebf-783b-787e-8f34-0d0df37b3f69/20UMGIM71875.rgb.jpg/55x55bb.png", "attributes": { "height": "55" } }, { "label": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0e/e1/be/0ee1bebf-783b-787e-8f34-0d0df37b3f69/20UMGIM71875.rgb.jpg/60x60bb.png", "attributes": { "height": "60" } }, { "label": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/0e/e1/be/0ee1bebf-783b-787e-8f34-0d0df37b3f69/20UMGIM71875.rgb.jpg/170x170bb.png", "attributes": { "height": "170" } }], "im:itemCount": { "label": "14" }, "im:price": { "label": "$9.99", "attributes": { "amount": "9.99000", "currency": "USD" } }, "im:contentType": { "im:contentType": { "attributes": { "term": "Album", "label": "Album" } }, "attributes": { "term": "Music", "label": "Music" } }, "rights": { "label": "A Mercury Nashville Release; ℗ 2020 Sound Records, under exclusive license to UMG Recordings, Inc." }, "title": { "label": "Starting Over - Chris Stapleton" }, "link": { "attributes": { "rel": "alternate", "type": "text/html", "href": "https://music.apple.com/us/album/starting-over/1528423147?uo=2" } }, "id": { "label": "https://music.apple.com/us/album/starting-over/1528423147?uo=2", "attributes": { "im:id": "1528423147" } }, "im:artist": { "label": "Chris Stapleton", "attributes": { "href": "https://music.apple.com/us/artist/chris-stapleton/1752134?uo=2" } }, "category": { "attributes": { "im:id": "6", "term": "Country", "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2", "label": "Country" } }, "im:releaseDate": { "label": "2020-11-13T00:00:00-07:00", "attributes": { "label": "November 13, 2020" } } }
const type = "ADD_FVR_ALBUM"
it("renders album component successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Album album={album} type={type} />, div)
})