import spotifyApi from "./lib/spotify";

type Playlist = {
  name: string;
  images: { url: string }[];
  owner: {
    display_name: string;
  };
  followers: {
    total: number;
  };
  tracks: {
    total: number;
  };
  description: string;
  id: string;
};

type Track = {
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string }[];
  };
  duration_ms: number;
  id: string;
  uri: string;
};

type Image = {
  url: string;
};

type SongInfo = {
  album: {
    name: string;
    images: Image[];
  };
  name: string;
  artists: {
    name: string;
  }[];
};
