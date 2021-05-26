import React, {Component} from 'react';
import './PersonDetails.scss';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className='person-details card p-3'>
                <img className='person-details__img card-img'
                     src='https://starwars-visualguide.com/assets/img/characters/3.jpg' alt='character'/>
                <div className='card-body'>
                    <h4>R2-D2</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='pe-1'>Gender:</span>
                            <span>male</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='pe-1'>Birth Year:</span>
                            <span>43</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='pe-1'>Eye Color:</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
