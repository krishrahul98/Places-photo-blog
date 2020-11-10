import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description:
      "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City.",
    imageUrl:
      "https://www.great-towers.com/sites/default/files/2019-07/tower_0.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.74844,
      lng: -73.985664,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description:
      "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City.",
    imageUrl:
      "https://i.pinimg.com/280x280_RS/dc/f5/33/dcf533f965c3ad3315ba7f2a1c8542c4.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.74844,
      lng: -73.985664,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
