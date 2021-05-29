import React, {Component} from 'react';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 1,
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        return (
            <div className='row'>
                <div className='col-md-6 mt-4'>
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className='col-md-6 mt-4'>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
}
