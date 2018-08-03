import React from 'react';
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

  
  getTitle = (source) => {

    try {
      let image = require(`../images/source-logos/${source.id}.png`);
      return <img src={image} alt={source.id} />
    }
    catch (err) {
      return <h1>{source.name}</h1>
    }
  }





  render() {
    return(
      <div className="source"   ref={this.choser}>
        {(this.props.open)? 
        <SourceHeadlines headlines={this.props.headlines} history={this.props.history} getTitle={this.getTitle}/>
        :
        <div className="open-source">
          <button onClick={()=>this.props.history.push(`/source/${this.props.headlines[0].source.id}`)}>{this.getTitle(this.props.headlines[0].source)}</button>
        </div>}
      </div>
    )
  }
}

export default Source;
