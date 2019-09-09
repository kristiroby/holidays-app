
import React from 'react';
import Aside from './Aside.js'
import Main from './Main.js'
import Header from "./Header";


class App extends React.Component {
 constructor(){
   super()
   this.state = {
    view: {
      page: 'home'
    },
    holidays: [],
    formInputs: {
      name: "",
      description: "",
      date: "",
      id: null
    }
  }

 }
 handleView = (view, holiday) => {
  // declare an empty variable
  let formInputs = {
    name: '',
    image: '',
    body: '',
    id: ''
  }
  // decide the pageTitle based on the view
  switch (view) {
    case 'home':
      break
    case 'addHoliday':
      break
    case 'editHoliday':
      formInputs = {
        name: holiday.name,
        description: holiday.description,
        date: holiday.date,
        id: holiday.id
      }
      break
    default:
      break
  }
  // update the state
  this.setState({
    view: {
      page: view
    },
    formInputs: formInputs
  })
}

  render () {
    return (
        <div className="holidays-list">
          <Aside handleView={this.handleView}
          />
          <Main
            view={this.state.view}
            handleView={this.handleView}
            formInputs={this.state.formInputs}
            holidays={this.state.holidays}
          />
        </div>
        )
    }
  }
export default App
