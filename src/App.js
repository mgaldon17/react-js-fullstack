import React, {Component, useCallback} from "react";
import jsonServerProvider from 'ra-data-json-server';
import {CurrencyList} from "../src/currencies";
import { Admin, Resource, ListGuesser} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

//connect the data provider to the REST endpoint
//const dataProvider = jsonServerProvider('https://api.coincap.io/v2/assets');

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
    return (
        <Admin dataProvider={dataProvider}>
                <Resource name="users" list={CurrencyList}/>

        </Admin>
    );
 }


export default App;

