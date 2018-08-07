import React from 'react';
import Headline from './Headline.js';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

class SearchResults extends React.Component {

  static propTypes = {
    
  }

  results = React.createRef();

  componentDidMount(){
    var rect = this.results.current.getBoundingClientRect();
    this.setState({top: rect.top});
    const scrollPosition = this.results.current.getBoundingClientRect().top + window.scrollY -120;
    Scroll.animateScroll.scrollTo(scrollPosition);



  }

  render() {

    return(
      <div className="search-results" ref={this.results}>
        <div className="headlines">
        results
        {this.props.headlines.map((h, i) => <Headline key={i} headline={h}/>)}
        </div>  
      </div>
     
    )

  }

}

export default SearchResults;
