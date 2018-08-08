import React from 'react';
import { Line } from 'rc-progress';
import {Link} from 'react-router-dom';
import Scroll from 'react-scroll';
import Headline from './Headline';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";

class SourceHeadlines extends React.Component {

    state={
        progress: 0
    }

    static propTypes = {
      headlines: PropTypes.array,
      history: PropTypes.object
    }

    headlines = React.createRef();

    handleScroll=()=>{
        const postTop=this.headlines.current.getBoundingClientRect().top;
        const postHeight=this.headlines.current.getBoundingClientRect().height;
        const progress = ((((window.innerHeight-postTop)/postHeight)*100)<=100)?((window.innerHeight-postTop)/postHeight)*100 : 100;
      
        this.setState({progress});

        let rect = this.headlines.current.getBoundingClientRect();
        this.setState({top: rect.top, bottom: rect.bottom})
        if(this.state.top > window.innerHeight || this.state.bottom < 70 ) {(this.props.search)?this.props.setSearch(false, '') : this.props.history.push('/')};
      }
    
    
      componentDidMount(){
        var rect = this.headlines.current.getBoundingClientRect();
        this.setState({top: rect.top});
        const scrollPosition = this.headlines.current.getBoundingClientRect().top + window.scrollY -120;
        Scroll.animateScroll.scrollTo(scrollPosition);
        document.addEventListener('scroll', this.handleScroll);

    
      }

      componentWillUnmount(){
        document.removeEventListener('scroll', this.handleScroll)
      }


      handleClickOutside = evt => { this.props.history.push('/') }


  render() {

    return(
      <div className="source-headlines" ref={this.headlines} >
          <div className="top-bar"> 
            { (!this.props.search) ?
              this.props.getTitle(this.props.headlines[0].source) :
              <div className="search-placeholder"></div>
            }
            <div className="close">
              <Link to='/' style={(this.state.progress<100)? {color:"#000"}:{color:"#1CBF7B"}} onClick={()=>{(this.props.search)?this.props.setSearch(false, ''):null}}> &times; </Link> 
            </div>         
          <Line percent={this.state.progress} strokeWidth="0.3" strokeColor={(this.state.progress<100)?"#000":"#1CBF7B"} />      
        </div>
        <div className="headlines">
        {this.props.headlines.map((h, i) => <Headline key={i} headline={h}/>)}
        </div>  
      </div>
    )

  }

}

export default onClickOutside(SourceHeadlines);


