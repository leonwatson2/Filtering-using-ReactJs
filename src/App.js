import React, { Component } from 'react';
import data from './generated.json'
import Projects from './Projects'

class App extends Component {
  constructor(props) {
    super(props);
    console.log(data);
    this.state = { search:"" };
  }
  render() {
    const { search } = this.state
    const filteredData = data.filter((p)=>{
            return (p.state.includes(search) || p.name.includes(search))
          })
    return (
      <div className="container">
        <div className="row">
            <h2>Search through education projects </h2>
            <h5>Search by state or name</h5>
            <input type="text" value={search}  onChange={(e)=>{ this.setState({search:e.target.value}); }}/>
        </div>
        <div className="row">
              {
                filteredData.length ? 
                  (
                    
                          <Projects data={filteredData}/>
                     
                  )
                :

                <h3>We don't a project with that name? D:</h3>
              }
        </div>

      </div>
    );
  }
}


export default App;
