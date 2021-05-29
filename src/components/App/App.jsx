import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import ErrorButton from '../ErrorButton/ErrorButton';
import './App.scss';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState(({showRandomPlanet}) => ({
            showRandomPlanet: !showRandomPlanet
        }));
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        const {showRandomPlanet, hasError} = this.state;

        if (hasError) {
            return <ErrorIndicator/>;
        }

        const planet = showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <>
                <Header/>
                <div className='container-lg pt-4 pb-4'>
                    {planet}

                    <div className='btn-group mt-4'>
                        <button className='btn btn-success' onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton/>
                    </div>

                    <PeoplePage/>
                </div>
            </>
        );
    }
}
