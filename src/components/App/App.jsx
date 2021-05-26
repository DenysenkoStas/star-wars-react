import React from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import './App.scss';

const App = () => {
    return (
        <>
            <Header/>
            <div className='container-lg pt-4 pb-4'>
                <RandomPlanet/>
                <div className='row'>
                    <div className='col-md-6 mt-4'>
                        <ItemList/>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
