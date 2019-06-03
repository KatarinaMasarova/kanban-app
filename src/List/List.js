import React, { Component } from 'react';
import propTypes from 'prop-types';

import Card from '../Card/Card';

class List extends Component {
    render() {
        var cards = this.props.cards.map((card) => {
            return <Card 
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                tasks={card.tasks}
                color={card.color} />
        });
        
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

List.propTypes = {
    title: propTypes.string.isRequired,
    cards: propTypes.arrayOf(propTypes.object)
};

export default List;