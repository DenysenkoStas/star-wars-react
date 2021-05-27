import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import './RandomPlanet.scss';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2); // random id
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const {planet, loading} = this.state;
        const content = !loading ? <PlanetView planet={planet}/> : <Spinner/>;

        return (
            <div className='random-planet card p-3'>
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <>
            <img className='random-planet__img card-img'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet'/>
            <div className='card-body'>
                <h3>{name}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='pe-1'>Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='pe-1'>Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='pe-1'>Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};
