import React, {useState, useEffect, useRef} from 'react';
import {Map, TileLayer} from "react-leaflet";




const Leaflet = () => {
  
  const [center, setCenter] = useState([38.73, 77]);
  const zoom = 10;
  const mapRef = useRef()

  return (
    <div className= "leaflet">
        <header className="top">
          <h1>This are all the places where you can find us</h1>
        </header>
        <section className="main">
          <div className="sidebar">
            <h2>This is us</h2>
          </div>

          <div className="map_area">
            <Map
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              ref={mapRef}
            />

            </Map>
          </div>
        </section>
    </div>
  )
}

export default Leaflet

// function LocationMarker() {
//     const [position, setPosition] = useState(null)
//     const map = useMapEvents({
//       click() {
//         map.locate()
//       },
//       locationfound(e) {
//         setPosition(e.latlng)
//         map.flyTo(e.latlng, map.getZoom())
//       },
//     })
  
//     return position === null ? null : (
//       <Marker position={position}>
//         <Popup>You are here</Popup>
//       </Marker>
//     )
//   }
  
//   render(
//     <MapContainer
//       center={{ lat: 51.505, lng: -0.09 }}
//       zoom={13}
//       scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LocationMarker />
//     </MapContainer>,
//   )