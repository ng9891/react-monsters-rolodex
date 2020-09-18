import React from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/searchBox/searchBox.component.jsx';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
    this.handleSearchChange2 =  this.handleSearchChange2.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((json) => {
      this.setState({monsters: json});
      console.log(json);
    });
  }

  handleSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  handleSearchChange2(e){
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className='title'> Monsters Rolodex </h1>
        <SearchBox
          placeholder="Search monster name"
          handleChange={this.handleSearchChange2}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
