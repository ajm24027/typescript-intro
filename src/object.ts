// Objects

function printCoords(coords: { lat: string; lng: string}) {
  console.log('Lat', coords.lat)
  console.log('Lng', coords.lng)
}

function getDistanceBetween (coords1: { lat: string; lng: string}, coords2: { lat: string; lng: string}) {
  //return distance between coords1 and coords 2
}

const user = {name: 'Codiku', lastName: 'TheDev'}

function displayUser(user: {
  firstName: string;
  lastName?: string;
}) {
  console.log('Last Name', user.lastName?.toLocaleLowerCase());
}