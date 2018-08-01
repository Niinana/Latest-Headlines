import React from 'react';
import Headline from './Headline';
import PropTypes from 'prop-types';

class LatestHeadlines extends React.Component {

    static propTypes = {
        headlines: PropTypes.array
      }

  render() {
    return(
        <div className="latest">
            <div className="section-1">
            <Headline key='0' headline={this.props.headlines[0]}/>
            </div>
            <div className="section-2">
                {this.props.headlines.slice(1,5).map((headline, i) => <Headline key={i} headline={headline}/>)}
            </div>
            <div className="section-3">
                {this.props.headlines.slice(5,8).map((headline, i) => <Headline key={i} headline={headline}/>)}
            </div>

        </div>

     
    )

  }

}

export default LatestHeadlines;
