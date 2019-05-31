import React, { Component } from 'react';

import CheckList from '../CheckList/CheckList';

class Card extends Component {
    state = {
        showDetails: false
    };

    toggleCard = () => {
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        console.log(this.state.showDetails);
        let cardDetails = null;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        };

        return (
            <div className="card" onClick={this.toggleCard}>
                <div className="card__title">{this.props.title}</div>
                {cardDetails}
            </div>
        );
    }
}

export default Card;