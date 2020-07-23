import React from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalList from './component/AnimalList'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002/animals";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       animals :[]
    }
    
  }
  
  loadData = async () => {
   const response = await fetch(BACKEND_URL)
  const results = await response.json()
  this.setState({animals :results})
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
  return (
    <div className="App">
      <h1>Animal Shelter</h1>
      <AnimalList animals = {this.state.animals} />
    </div>
  );
}
}
export default App;
