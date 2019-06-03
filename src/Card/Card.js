import React, { Component } from 'react';
import propTypes from 'prop-types';

import CheckList from '../CheckList/CheckList';
import marked from 'marked';

let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName];
        if (typeof value !== 'string' || value.length > 80) {
            return new Error(
                `${propName} in ${componentName} is longer than 80 characters`
            );
        }
    }

    console.log(props);
};


class Card extends Component {
    state = {
        showDetails: false
    };


    toggleCard = () => {
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        let cardDetails = null;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        };

        let classes = ['card__title'];
        if (this.state.showDetails) {
            classes.push('card__title--is-open');
        }
        let classesString = classes.join(' ');

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };

        return (
            <div className="card" onClick={this.toggleCard}>
                <div style={sideColor}></div>
                <div className={classesString}>{this.props.title}</div>
                {cardDetails}
            </div>
        );
    }
}

Card.propTypes = {
    id: propTypes.number,
    title: propTypes.string,
    title: titlePropType,
    description: propTypes.string,
    color: propTypes.string,
    tasks: propTypes.arrayOf(propTypes.object)
};

export default Card;