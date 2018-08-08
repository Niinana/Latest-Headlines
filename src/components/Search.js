import React from 'react';
import SourceHeadlines from './SourceHeadlines';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";

class Search extends React.Component {

  static propTypes = {

  }

  searchInput = React.createRef();
    
  search = (event) => {
      event.preventDefault();
      const query = this.searchInput.current.value.trim().toLowerCase();
      this.props.setSearch(true, query);
        
    }

    handleClickOutside = evt => { this.props.setSearch(false, '') }

  render() {
    return(
      <div className="search"   ref={this.choser}>
        <div className={(this.props.search && this.props.getResults().length>0)?"search-top-fixed":"search-top"}>
                    <form onSubmit={this.search}>
                        
                        <button type="submit"> Search <i className="fa fa-search"></i> </button>
                        <input ref={this.searchInput} type="text" required />
                        
                    </form>
                    </div>
                    {(this.props.search)? 
                    
                        (
                          ( (this.props.getResults().length >= 1)?
                            <SourceHeadlines headlines={this.props.getResults()} history={this.props.history} search={this.props.search} setSearch={this.props.setSearch}/>
                            :
                             <h3>Sorry, there are no headlines matching your query</h3>
                          )      

                        )
                        :
                        <React.Fragment/>

                }
      </div>
    )
  }
}

export default onClickOutside(Search);
