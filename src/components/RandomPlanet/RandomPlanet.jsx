import React, {Component} from 'react';
import './RandomPlanet.scss';

export default class RandomPlanet extends Component {
    render() {
        return (
            <div className='random-planet card p-3'>
                <img className='random-planet__img card-img'
                     src='https://starwars-visualguide.com/assets/img/planets/5.jpg' alt='planet'/>
                <div className='card-body'>
                    <h3>Planet Name</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='pe-1'>Population:</span>
                            <span>123124</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='pe-1'>Rotation Period:</span>
                            <span>43</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='pe-1'>Diameter:</span>
                            <span>100</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}