import React from 'react';
import {Link} from 'react-router-dom';
import SourceHeadlines from './SourceHeadlines';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';

class Source extends React.Component {

  static propTypes = {
    open: PropTypes.bool,
    headlines: PropTypes.array,
    history: PropTypes.object
  }

  choser = React.createRef();


  goToTop = () => {
    const scrollPosition = this.choser.current.getBoundingClientRect().top + window.scrollY;
    Scroll.animateScroll.scrollTo(scrollPosition);
  }



  render() {
    return(
      <div className="source"   ref={this.choser}>
        {(this.props.open)? 
        <SourceHeadlines headlines={this.props.headlines} history={this.props.history}/>
        :
        <Link to={`/source/${this.props.headlines[0].source.id}`}> {this.props.headlines[0].source.name} </Link>}
      </div>
    )
  }
}

export default Source;
