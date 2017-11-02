export const getSongs = results => {
  const songs = results.reduce((songs, song) => {
    songs.push({ id: song.id, name: song.name, artist: song.artists[0].name })
    return songs
  }, [])
  return songs
}
