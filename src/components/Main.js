import React from 'react';
import { SyncLoader } from 'react-spinners';
import Router from './Router';



class Main extends React.Component {

  constructor(){
    super();
    this.state = {
      aljazeera: [],
      bbc: [],
      businessinsider:[],
      buzzfeed: [],
      nytimes: []
    }

  }


  getData = async () => {
    const aljazeeraPromise = fetch("https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=7e6085e11ac44533abe8400b20373d4d"); 
    const bbcPromise = fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7e6085e11ac44533abe8400b20373d4d"); 
    const binsiderPromise = fetch("https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=7e6085e11ac44533abe8400b20373d4d"); 
    const buzzfeedPromise = fetch("https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=7e6085e11ac44533abe8400b20373d4d"); 
    const nytimesPromise = fetch("https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=7e6085e11ac44533abe8400b20373d4d");    
    const result = await Promise.all([aljazeeraPromise, bbcPromise, binsiderPromise, buzzfeedPromise, nytimesPromise]);
    const dataPromise = result.map(r => r.json());
    const [aljazeeraData, bbcData, binsiderData, buzzfeedData, nytimesData] = await Promise.all(dataPromise);
    this.setState({      
      aljazeera: aljazeeraData.articles,
      bbc: bbcData.articles,
      businessinsider: binsiderData.articles,
      buzzfeed: buzzfeedData.articles,
      nytimes: nytimesData.articles
    })
  } 
  
  componentDidMount() {
    this.getData();
  }


  render() {
 return(
        <div className="main">
          <div className="header">
            <img src={require("../images/logo.png")} alt="top-headlines-from-around-the-world" />
            <h1 className="main-title">Latest Headlines From Around The World</h1>
            <hr/><hr/>
          </div>
          
          {(this.state.bbc[1])?
          (
            <Router all={this.state}/> 
          )

          :

          (
            <SyncLoader 
                color={'#000'} 
                loading={this.state.loading} 
                size={20}/>
          )}   
          <div className="footer">
            <p>Thank you <a href="https://newsapi.org/">newsapi.org</a></p>
          </div>   
        </div>
      );
  }
}

export default Main;
