import React from 'react';
import {Link} from 'react-router-dom';
import SourceHeadlines from './SourceHeadlines';
import Scroll from 'react-scroll';

class Source extends React.Component {


  choser = React.createRef();


  goToTop = () => {
    const scrollPosition = this.choser.current.getBoundingClientRect().top + window.scrollY;
    Scroll.animateScroll.scrollTo(scrollPosition);
  }



  render() {
    return(
      <div className="source"   ref={this.choser}>
        {(this.props.open)? 
        <SourceHeadlines headlines={this.props.headlines} image={this.props.image} history={this.props.history}/>
        :
        <Link to={`/source/${this.props.headlines[0].source.id}`}> {this.props.headlines[0].source.name} </Link>}
      </div>
    )
  }
}

export default Source;
