const database = {
  venues: [
    {
      id: 1,
      name: "Rymann",
      address: "Main Street",
      sqft: 25000,
      occupancy: 150,
    },
    {
      id: 2,
      name: "Jungle",
      address: "Broad Street",
      sqft: 26000,
      occupancy: 150,
    },
    {
      id: 3,
      name: "Forest",
      address: "MLK Drive",
      sqft: 15000,
      occupancy: 250,
    },
    {
      id: 4,
      name: "Corn",
      address: "Veterans BLVD",
      sqft: 20000,
      occupancy: 200,
    },
    {
      id: 5,
      name: "Steve",
      address: "Church Street",
      sqft: 23000,
      occupancy: 250,
    },
    {
      id: 6,
      name: "Lemon",
      address: "Ocean Avenue",
      sqft: 28000,
      occupancy: 200,
    },
  ],
  bands: [
    {
      id: 1,
      name: "Stixx",
      members: 5,
      genre: "Rock",
      formed: 2001,
      venueId: 1,
    },
    {
      id: 2,
      name: "Creed",
      members: 4,
      genre: "Rock",
      formed: 2013,
      venueId:2,
    },
    {
      id: 3,
      name: "Mixed Array",
      members: 4,
      genre: "Alternative",
      formed: 2014,
      venueId:2,
    },
    {
      id: 4,
      name: "I Hate Arrays",
      members: 3,
      genre: "Punk",
      formed: 2015,
      venueId:4,
    },
    {
      id: 5,
      name: "The System",
      members: 3,
      genre: "Punk",
      formed: 2009,
      venueId: 5,
    },
    {
      id: 6,
      name: "Monkey",
      members: 5,
      genre: "Rock",
      formed: 2008,
      venueId: 3,
    },
    {
      id: 7,
      name: "Iterate Object",
      members: 5,
      genre: "MetalCore",
      formed: 2010,
      venueId: 5,
    },
    {
      id: 8,
      name: "Time Stood Still",
      members: 4,
      genre: "MetalCore",
      formed: 2010,
      venueId: 6,
    },
  ],
};

export const getVenues = () => {
  return database.venues.map((venue) => ({ ...venue }));
};
export const getBands = () => {
  return database.bands.map((band) => ({ ...band }));
};
