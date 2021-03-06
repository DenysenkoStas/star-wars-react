import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import './ItemList.scss';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then(peopleList => {
                this.setState({peopleList});
            });
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li key={id} className='list-group-item' onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {
        const {peopleList} = this.state;

        if (!peopleList) {
            return <Spinner/>;
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className='item-list list-group'>
                {items}
            </ul>
        );
    }
}
