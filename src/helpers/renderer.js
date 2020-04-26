import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'
import Routes from './../client/routes'
import webConfig from './../../webConfig'

//luis moscoso
export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        ${helmet.meta.toString()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        ${helmet.title.toString()}
        <link rel="shortcut icon" href="${webConfig.siteURL}/assets/graphics/favicon.ico">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">
        <link href="${webConfig.siteURL}/assets/css/styles.min.css" rel="stylesheet" type="text/css" />
        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        <script src="https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>
        <script src="https://unpkg.com/aframe-extras.ocean@%5E3.5.x/dist/aframe-extras.ocean.min.js"></script>
        <script src="https://unpkg.com/aframe-gradient-sky@1.0.4/dist/gradientsky.min.js"></script>
        </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${content}</div>
        <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="${webConfig.siteURL}/client_bundle.js"></script>
    </body>
</html>`
}

// <html>
//   <head>
//     <style>
// 			body { margin: 0; }
// 			canvas { display: block; }
// 		</style>
//     <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
//     <script src="https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>
//     <script src="https://unpkg.com/aframe-extras.ocean@%5E3.5.x/dist/aframe-extras.ocean.min.js"></script>
//     <script src="https://unpkg.com/aframe-gradient-sky@1.0.4/dist/gradientsky.min.js"></script>
//     <script src="../client/three.js"></script>
//   </head>
//   <body>

//     <a-scene>

//         <a-box position="-1 0.5 -3" rotation="0 45 0" color="#000000">
//         </a-box>

//         <a-sphere position="0 1.25 -5" radius="1.25" color="pink">
//         </a-sphere>

//         <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="red">
//         </a-cylinder>

//         <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="yellow">
//         </a-plane>

//         <a-sky color="#000000">
//         </a-sky>

//         <a-entity
//                 id="sphere";
//                 geometry="primitive: sphere";
//                 castShadow: true;
//                 shadowCameraVisible: true;
//                 material="color: #EFEFEF;
//                 shader: flat";
//                 position="0 6.15 -5";
//                 light="type: point; intensity: 2.5";
//                 animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 2000; to: 0 8.33 -5; loop: true"
//         >
//         </a-entity>

//         <a-entity position="0 -1 0" id="ocean" ocean="density: 20; width: 50; depth: 50; speed: 4"
//                 material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1"
//                 rotation="-90 0 0"></a-entity>

//         <a-entity particle-system="preset: snow; color: #ff0000;" position="0 0 -10">
//         </a-entity>
//     </a-scene>
//   </body>
// </html>
