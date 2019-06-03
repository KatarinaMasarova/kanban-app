import React, { Component } from 'react';
import propTypes from 'prop-types';

import List from '../List/List';

class KanbanBoard extends Component {    
    render(){
        return (
            <div className="app">
                <List 
                    id='todo' 
                    title="To Do" 
                    cards={this.props.cards.filter((card) => card.status === "todo")} />
                <List 
                    id='in-progress' 
                    title="In Progress" 
                    cards={this.props.cards.filter((card) => card.status === "in-progress")} />
                <List 
                    id='done' 
                    title='Done' 
                    cards={this.props.cards.filter((card) => card.status === "done")} />
            </div>
        );
    }
}

KanbanBoard.propTypes = {
    cards: propTypes.arrayOf(propTypes.object)
};

export default KanbanBoard;