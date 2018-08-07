import React from 'react';
import Source from './Source';
import LatestHeadlines from './LatestHeadlines';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';




class App extends React.Component {

    state = {
        search: {
            open: false,
            query:''
        }
    }

    static propTypes = {
        all: PropTypes.object,
        match: PropTypes.object
    }

    searchInput = React.createRef();
    
    search = (event) => {
        event.preventDefault();
        const query = this.searchInput.current.value.trim().toLowerCase();
        this.setState({search:{open:true, query}});
        this.searchInput.current.value = "";    
      }


    getLatest = () => {
        let latest = [];
        Object.keys(this.props.all).map(key => latest=[...latest, ...this.props.all[key]]);
        latest.sort((a,b)=>{
          if(a.publishedAt < b.publishedAt) return 1;
          return -1;
        })    
        return latest.slice(0, 9);
      }

    getResults = () => {
        const searchArray = this.state.search.query.split(' ');
        let results = Object.values(this.props.all).map(source => 
            source.filter(headline => {
                let bool = false;
                searchArray.forEach(word => {
                    if(headline.title.toLowerCase().includes(word)) bool = true;
                });
                return bool;
            })
        ); 
        return [].concat(...results);
    }

  render() {
    return(
            <div className="App">

                <LatestHeadlines headlines={this.getLatest()}/>
                <div className="all-sources">
                    <h1 className="subtitle">All Sources &#11835;</h1>
                    {Object.keys(this.props.all).map(key => <Source key={key} headlines={this.props.all[key]} open={(this.props.match.params.source && this.props.match.params.source===this.props.all[key][0].source.id)} history={this.props.history}/>      )}  
                </div>
                <div className="search">
                    <div className={(this.state.search.open)?"search-top-fixed":"search-top"}>
                        <form onSubmit={this.search}>
                            <input ref={this.searchInput} type="text" required placeholder="Search"/>
                            <button type="submit"> <i className="fa fa-search"></i> </button>
                        </form>
                    </div>
                    {(this.state.search.open)?
                    <SearchResults headlines={this.getResults()} />
                    :
                    <React.Fragment/>
                }
                </div>
                
            </div>
        );
  }
}

export default App;
