import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import "./styles.css";

import mapIcon from '../../utils/mapIcon';
import MapMarkerImg from '../../images/map-marker.svg';

import {Container, Aside, Footer} from './styles';

const OrphanagesMap: React.FC = ()=>{
    return(
        <Container>
            <Aside>
                <header>
                    <img src={MapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato do mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <Footer>
                    <strong>Feira de Santana</strong>
                    <span>Bahia</span>
                </Footer>
            </Aside>

            <Map center={[-12.279941,-38.9380521]} zoom={15} style={{width: '100%', height: '100%'}}>
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                <Marker icon={mapIcon} position={[-12.279941,-38.9380521]}>
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="orphanages/1">
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create">
                <FiPlus size={32} color="#fff" />
            </Link>
        </Container>
    );
}

export default OrphanagesMap;