//Action creator
export const selectSong = (song) => {
  return {
    type: "SONG_SELCTED",
    payload: song,
  };
};
