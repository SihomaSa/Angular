interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: String;
    details: Details;
}

interface Details {
    author:string;
    year: number;
}

const audioPlayer:AudioPlayer={
    audioVolume:90,
    songDuration: 361.54,
    song:"Song Name",
    details:{
        author: "Thomas",
        year:2021
    }
}
const song  = 'New Song'
//const {song:anotherSong, songDuration:duration, details:{author,year}}=audioPlayer;
const {song:anotherSong, songDuration:duration, details}=audioPlayer;
const{author}=details;
//console.log('Song: ',anotherSong)
//console.log('Duration: ',duration)
//console.log('Author: ',author)
//console.log('Year: ',year)

//const dbz: string[]=['Goku','Vegeta','Trunks'];
//const trunks =dbz[2] || 'no hay personaje'

const [,,trunks='Not found']: string[]=['Goku','Vegeta'];
console.error('Pesonaje 3: ', trunks);  //dbz[3]|| 'no hay personaje'


export{};
