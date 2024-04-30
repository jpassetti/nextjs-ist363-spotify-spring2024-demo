import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
 const token = await getAccessToken();

 const artists = [
  {
   name: "Taylor Swift",
   spotify_id: "06HL4z0CvFAxyc27GXpf02",
  },
  {
   name: "Beyoncé",
   spotify_id: "6vWDO969PvNqNYHIOW5v0m",
  },
  {
   name: "Ariana Grande",
   spotify_id: "66CXWjxzNUsdJxJ2JdwvnR",
  },
 ];
 const artistsIds = artists.map((artist) => artist.spotify_id);

 const artistsString = artistsIds.join(",");

 const artistsResponse = await fetch(
  `https://api.spotify.com/v1/artists?ids=${artistsString}`,
  {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  }
 );

 const artistsData = await artistsResponse.json();

 return new Response(JSON.stringify(artistsData));
}
