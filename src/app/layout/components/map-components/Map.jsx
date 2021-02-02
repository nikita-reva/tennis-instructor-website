import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    height: 400px;
`
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
})

L.Marker.prototype.options.icon = DefaultIcon

var myIcon = L.icon({
    iconUrl:
        'https://raw.githubusercontent.com/iconic/open-iconic/master/png/map-marker-8x.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -35],
})

export default class Map extends React.Component {
    componentDidMount() {
        this.map = L.map('map', {
            center: [47.849682, 9.0158565],
            zoom: 15,
            zoomControl: false,
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map)

        L.marker([47.849682, 9.0158565], { icon: myIcon })
            .addTo(this.map)
            .bindPopup(
                'Tennis Academy Yasar </br> Am Osterholz 4 </br> 78333 Stockach'
            )
            .openPopup()
    }

    render() {
        return <Wrapper id="map" />
    }
}
