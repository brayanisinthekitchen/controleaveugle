const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "BQCjEVTl48NidU1vnri_muu1QPQ2JxQ6AfyZNA_M0b-Cqu0robepRrj8mTwapN0WcfAZqq8AZ1yWkkys2OphRagGItIPofir8NHz9dfxQID1wx3dbc4Y_kQhZ2rUG0mmSpQ0jiyQz8JfxlC2eiZs2XZS2CsrOQyQOIE_baFOFiDSwrh73cQnodAe_IPqorC40--k4PA1bfiO3y36WA";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName)

  console.log("---------------+++++++++++++++++++++++++")
  let playlists = []

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id)
    
    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);

    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    fs.writeFileSync(playlist.name+'.json', data);
  }
}

async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  // console.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track);
    console.log(track.name + " : " + track.artists[0].name)
  }
  
  console.log("---------------+++++++++++++++++++++++++")
  return tracks;
}

getMyData();