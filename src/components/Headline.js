import React from 'react';
import {formatDate} from '../helpers';
import PropTypes from 'prop-types';

class Headline extends React.Component {

  static propTypes = {
    headline: PropTypes.object,
  }

  setImage = (image) => {
    if(image){
      return {backgroundImage: `url(${image})`}
    }
    image = require('../images/stock-cover.jpg');
    return {backgroundImage: `url(${image})`}
}

  render() {

    return(
      <div className="headline">
      <a href={this.props.headline.url} target="_blank">
        <div>
          <h2>{this.props.headline.title}</h2>
          <div className="source-date">
            <p className="source">{this.props.headline.source.name}</p>
            <p className="date">{formatDate(this.props.headline.publishedAt)}</p>
          </div>
          <div className="hl-img" style={this.setImage(this.props.headline.urlToImage) }> </div> 
          <p className="desc">{this.props.headline.description}</p> 
        </div>
      </a>  
      </div>
     
    )

  }

}

export default Headline;
