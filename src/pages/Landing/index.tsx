import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logoImg from '../../images/logo.svg';

import {Container, Content, Location} from './styles';


const Landing: React.FC = ()=>{
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Happy"/>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças</p>                    
                </main>

                <Location>
                    <strong>Feira de Santana</strong>
                    <span>Bahia</span>
                </Location>

                <Link to="map">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
                </Link>
            </Content>
        </Container>
    );
}

export default Landing;