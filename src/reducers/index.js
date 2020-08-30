import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: "Too Much", duration: "3:07", Artist: "ZAYN, Timbaland" },
    { title: "Trip", duration: "3:34", Artist: "Ella Mai" },
    { title: "Golden", duration: "3:29", Artist: "Harry Styles" },
    { title: "Purple Rain", duration: "8:41", Artist: "Prince" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELCTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});
