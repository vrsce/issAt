
let divider = document.querySelector('.divider');

  const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

  const lat = document.querySelector('#lat');
  const lon = document.querySelector('#lon');
  const satName = document.querySelector('.satName');
  const satAlt = document.querySelector('.satAlt');
  const satVel = document.querySelector('.satVel');


    async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();

        lat.textContent = data.latitude+'Â°';
        lon.textContent = data.longitude+'Â°';

        satAlt.textContent = data.altitude+' - km'
        satVel.textContent = data.velocity+' - m/s';

       //console.log(data);
    }


    /*
            "altitude": 253.3204968444,
        "velocity": 17148.926453151,
        "visibility": "daylight",
        "footprint": 2761.5254566356,
        "timestamp": 1436029892,
        "daynum": 2457208.2163426,
        "solar_lat": 22.85465108118,
        "solar_lon": 283.22043315343,
        "units": "miles"
    */


    setInterval(() => {
        getISS();
    }, 1000);


    let hexVal = '#'
    let hexArr = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];



    setInterval(() => {

        for (let i = 0; i < 6; i++) {
            let rando = Math.floor(Math.random() * hexArr.length);
            hexVal += hexArr[rando]
          }
        divider.style.color = hexVal;
        hexVal = '#';


    }, 2500)
