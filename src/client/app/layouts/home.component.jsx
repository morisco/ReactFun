import React, { Component } from 'react';
import {Link} from 'react-router';

import Header from '../components/header.jsx';


class Home extends Component {
    render(){
        return (
            <div id="wrapper">
                <Header test="HoHO" />
                <div id="content">
                    <section id="intro">
                        As part of <a href="http://theringer.com/last-meal-on-earth" target="_blank">Last Meal on Earth: The End of Eating</a>, our weeklong package dedicated to food, we wanted to establish, once and for all, the absolute best fast-food items in America. The 'Ringer' staff participated in a two-step vote—first establishing more than 100 nominees, then holding a general election. (Condiments were disqualified from contention.) Below you'll find our final results. We're prepared for your complaints.
                    </section>
                    <div id="filters">
                        <a href="javascript:void(0);" data-filter="All" className="active"><span>All Picks</span></a>
                        <a href="javascript:void(0);" data-filter="Fries"><span>Fries</span></a>
                        <a href="javascript:void(0);" data-filter="Burger"><span>Burgers</span></a>
                        <a href="javascript:void(0);" data-filter="Chicken"><span>Chic<span>k</span>en</span></a>
                        <a href="javascript:void(0);" data-filter="Taco"><span>Tacos</span></a>
                        <a href="javascript:void(0);" data-filter="Dessert"><span>Dessert</span></a>
                        <a href="javascript:void(0);" data-filter="Misc"><span>Misc.</span></a>
                    </div>
                    <section>
                        <ul id="item-list" className="grid"></ul>
                        <div className="disclaimer">*Prices are based on California locations of the respective franchises.</div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home