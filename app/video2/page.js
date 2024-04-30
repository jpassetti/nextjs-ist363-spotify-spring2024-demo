"use client";

import { useEffect, useState } from "react";

function HomePage() {
 const [artists, setArtists] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  try {
   fetch("/api/artists")
    .then((res) => res.json())
    .then((data) => {
     setArtists(data.artists);
     setIsLoading(false);
    });
  } catch (error) {
   setError(error);
  }
 }, []);

 useEffect(() => {
  console.log(artists);
 }, [artists]); // Only re-run when artists changes

 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>Error loading artists</p>;

 return (
  <div>
   {artists.map((artist) => (
    <p key={artist.id}>{artist.name}</p>
   ))}
  </div>
 );
}

export default HomePage;
