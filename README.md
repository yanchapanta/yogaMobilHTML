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
