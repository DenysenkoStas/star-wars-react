import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import ErrorButton from '../ErrorButton/ErrorButton';
import './PersonDetails.scss';

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({loading: true}); // show <Spinner/>
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then(person => {
                this.setState({
                    person,
                    loading: false // hide <Spinner/>
                });
            });
    };

    render() {
        const {person, loading} = this.state;

        if (!person) {
            return <span>Select a person from a list</span>;
        }

        if (loading) {
            return <Spinner/>;
        }

        const {id, name, gender, birthYear, eyeColor} = person;

        return (
            <div className='person-details card p-3'>
                <img className='person-details__img card-img'
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='character'/>
                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='pe-1'>Gender:</span>
                            <span>{gender}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='pe-1'>Birth Year:</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='pe-1'>Eye Color:</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>

                    <ErrorButton/>
                </div>
            </div>
        );
    }
}
