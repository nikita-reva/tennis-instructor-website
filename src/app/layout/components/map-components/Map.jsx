import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 796px;
    height: 495px;
    @media screen and (max-width: 840px) {
        width: 600px;
    }
`

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
    }

    render() {
        return <Wrapper id="map" />
    }
}
