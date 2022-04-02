# Proyecto Yoga de HTML a React

### Ingresando opciones de menú de link react-router-dom

En casso de error lanzara a la página por defecto
'<Route path="\*" element={<FourOFour />} />'

```js
import './css/styles.css';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Login from './pages/Login';
import FourOFour from './pages/FourOFour';

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Welcome />}></Route>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<FourOFour />} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
```

### Importando mp3

En la carpeta de vide creamos un archivo.js de mp3

```js
import hoppyNow from './happyNow.mpeg';
import soClose from './soClose.mpeg';
const video = {
	soClose: soClose,
	hoppyNow: hoppyNow
};
export default video;
```

### Exportando el vídeo

```js
import mp3 from '../../video/video';
```

`* Para importar y exportar imagenes es el mismo proceso del vídeo`

### Ingresando mp3 auto

```js
import ReactAudioPlayer from 'react-audio-player';

```
Esto lo insertamos en nuestro disenio
```js

<ReactAudioPlayer
	style={{
		opacity: 0,
		'pointer-events': 'none'
	}}
	src={mp3.hoppyNow}
	autoPlay
	controls
	loop="true"
/>;
```
## Diseño de prototipo

![disenio](https://lh3.googleusercontent.com/4JRrvpD2cDV9Wb4YIGhI9ERolYat8Nt3yri0gEEQ8nqf4nFVejf2zjcDU1oQvDWoy2DbfF0eVesDegYZliw67p0AH7W3ayTPxHhGHXBfe8-qet5SMYmwjJrvc_3cBt7-2Rjp-LrUouAxZgFGwy1l9jSm9_Qosnq_jn6isYomToZzxATyMl0hnrqYF8AhRcelo9w2fSE8fUxlqFuPQDScj4l0Z2XSD_5jccVTIGHaiZLDQm9zIjuoNxSTDwW-mLbP79mgPqcgogfgvYPZyY0A6CZksawdpsf1OF-w1KV5aGySTyUqL9e0BnY1uy2qqYOzYbVXI5w6JVXN55hKP1H57HZarPU9e_RFsHGAGolNw2e6T8SJZOBBCsOvtsFM_iY5BCb8r9CBS2GQedGi3qnO22wn4vFUInaWSyYV53C968EOtTzgz-BuKGTOA2YTguLATxaWSmSb23wapM1tiVUghXQmGARUNHJs96pfahggyJCCsG4ysDjk2uvO0-OfI7pBb9vKR6PGEeFMTFiRmri9hfoF4nHzQKknWsUUZxbRVp-zL6F-MNv4UY8Z8M8OgoBtfeis-bb11RqpiAsSs85gIA-4LB1BxwOTqOQKUs5Pi8kHae1t6B-miS3vIp5A3IPHSZjVzPajYUUEgvqtDmEUa4bVQYWOGEZHBEFtAv7KYfnhV4Xmhk6IFAXRRo95pnHUX6jqxRVamTaWV4z_8oUkY0pCrVJ4uLsY-6Uxvo2oymmLuWCrA5tcVpSvyXY=w319-h316-no?authuser=0)


### Temporizador javascript
```html
 <div id="temporizador" />
```
--- Todos los temporizadores van a igualares a cero  ---
```js
let horas = 3;
        let h = horas + 1;
        let hV = horas + 1;
        let minutos = 5;
        let m = minutos + 1;
        let mV = minutos + 1;
        let segundos = 5;
        let s=segundos + 1 ;
        let sV=segundos + 1 ;
        function temporizadorReloj() {
            h -= 1;
            hV -= 1;
            m -= 1;
            mV -= 1;
            s -= 1;
            sV -= 1;
            // if (horas < 10) { horas = '0' + horas; }
            // if (minutos < 10) { minutos = '0' + minutos; }
            if (hV > 0) {
                if (h < 10 ) { h = '0' + h; }                 
            }else{
                h='0'+ 0;
            }
            if (mV > 0) {
                if (m < 10 ) { m = '0' + m; }                 
            }else{
                m='0'+ 0;
            }
            
            if (sV > 0) {
                if (s < 10 ) { s = '0' + s; }                 
            }else{
                s='0'+ 0;
            }

            // if(parseInt(s) < NaN ){s=0}
            const letra = 'valore predeterminado';
            document.getElementById("temporizador").innerHTML = h + ':' + m + ':' + s;
        }
        window.onload = function () {
            setInterval(temporizadorReloj, 1000);
            // setInterval(muestraReloj, 1000);

```
### Para el temporizador del minuto: ingresamos el minuto dentro del segundo de forma anidad

```js
 // segundo
            if (s === 0) {
                //minuto
                m -= 1;
                mV -= 1;
                if (mV > 0) {
                    if (m < 10) { m = '0' + m; }
                } else {
                    m = '0' + 0;
                }
                s=60
                sV=60
            }
            // imprime segundo
            if (sV > 0) {
                if (s < 10) { s = '0' + s; }
            } else {
                s = '0' + 0;
            }

```
### Código terminado

```js
<body>
    <div id="reloj" />
    <div id="temporizador" />
    <script>
        // Valores de entrada,sV === 0
        let horas = 0;
        let h = horas;
        let hV = horas;
        let minutos = 0;
        let m = minutos;
        let mV = minutos;
        let segundos = 3;
        let s = segundos + 1;
        let sV = segundos + 1;
        // para que se inicialice con 00 en el print
        if (mV < 10) { m = '0' + m; }
        if (hV < 10) { h = '0' + h; }
        function temporizadorReloj() {
            s -= 1;
            sV -= 1;
            // segundo decrementar
            if (s < 0) {
                //minuto
                m -= 1;
                mV -= 1;
                if (mV > 0) {
                    if (mV < 10) { m = '0' + m; }
                } else {
                    m = '0' + 0;
                }
                s = 60
                sV = 60
            }
            // hora decrementar
            if (mV === 0 && sV === 0) {
                h -= 1;
                hV -= 1;
                if (hV > 0) {
                    if (hV < 10) { h = '0' + h; }
                } else {
                    h = '0' + 0;
                }
                m = 60
                mV = 60

            }
            // Probando con valores
            //   console.log('h ',hV < 0);
            //   console.log('m ',mV > 0);
            //   console.log('s ',sV === 0);

            //HORA MINUTO SEGUNDO FINALIZADO
            if (hV < 0 && mV > 0 && sV === 0) {
                console.log('hora finalizada');
            }
            // imprime segundo
            if (sV > 0) {
                if (s < 10) { s = '0' + s; }
            } else {
                s = '0' + 0;
            }

            const letra = 'valore predeterminado';
            document.getElementById("temporizador").innerHTML = h + ':' + m + ':' + s;
        }
        window.onload = function () {
            setInterval(temporizadorReloj, 1000);
        }

    </script>
</body>
```
### Ahora veremos como hacer esto en react
- El siguiente codigo me vota error
No puede guardar en el setHora me lanza pagina en blanco pero la musica sigue su ritmo
-lo he implementado en js pero no me sirve en react
___

```js
import { useEffect, useState } from 'react';
//fecha
import DateObject from 'react-date-object';

const Timer = () => {
	const [hora, setHora] = useState(12);
	const [minute, setMinute] = useState(5);
	const [second, setSecond] = useState(10);
	const [date, setDate] = useState('');
	const upHours = () => {
		return hora - 1;
	};
	setInterval(() => {
		let dateSystem = new DateObject();
		setDate(dateSystem.format('HH:mm:ss'));

		// setMinute(minute - 1);
		// setSecond(second - 1);
		setHora(upHours);
	}, 1000);
	return (
		<div>
			{hora + ':' + minute + ':' + second}
			<br /> hours {date}
		</div>
	);
};

export default Timer;
```
