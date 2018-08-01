import React from 'react';
import Source from './Source';
import LatestHeadlines from './LatestHeadlines';
import PropTypes from 'prop-types';



class App extends React.Component {

    static propTypes = {
        all: PropTypes.object,
        match: PropTypes.object
    }
    


    getLatest = () => {
        let latest = [];
        Object.keys(this.props.all).map(key => latest=[...latest, ...this.props.all[key]]);
        latest.sort((a,b)=>{
          if(a.publishedAt < b.publishedAt) return 1;
          return -1;
        })    
        return latest.slice(0, 8);
      }

  render() {
    return(
            <div className="App">

                <LatestHeadlines headlines={this.getLatest()}/>
                <div className="all-sources">
                    <h1>All Sources</h1>
                    {Object.keys(this.props.all).map(key => <Source key={key} headlines={this.props.all[key]} open={(this.props.match.params.source && this.props.match.params.source===this.props.all[key][0].source.id)} history={this.props.history}/>      )}  
                </div>
            
            </div>
        );
  }
}

export default App;
