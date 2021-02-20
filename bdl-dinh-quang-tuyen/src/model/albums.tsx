const dataUrl = "https://itunes.apple.com/us/rss/topalbums/limit=100/json"

export const fetchAlbumsData = async () => {
  const response = await fetch(dataUrl);
  const data = await response.json();
  return data.feed.entry;
}