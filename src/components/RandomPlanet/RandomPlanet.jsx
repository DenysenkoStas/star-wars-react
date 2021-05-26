import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService';
import './RandomPlanet.scss';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2); // random id
        this.swapiService
            .getPlanet(id)
            .then(planet => {
                this.setState(({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                }));
            });
    }

    render() {
        const {id, name, population, rotationPeriod, diameter} = this.state;

        return (
            <div className='random-planet card p-3'>
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
            </div>
        );
    }
}
