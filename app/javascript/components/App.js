
import React from 'react';
import Holiday from './Holiday.js'
import Form from './Form.js'
import Main from './Main.js'


class App extends React.Component {
 constructor(){
   super()
   this.state = {
    view: {
      page: 'home'
    },
    holidays: [],
    searchURL: 'https://calendarific.com/api/v2/holidays?api_key=98afab6a63c5dfa88360a097e4dca27d8fc3ba54a2d06a038fa89eb9e75f5a8e&country=US&year=2019',
    formInputs: {
      name: '',
      description: '',
      date: '',
      id: null
    }
  }
  // this.fetchHolidays = this.fetchHolidays.bind(this)
  // this.handleCreate = this.handleCreate.bind(this)
 }
 handleView = (view, holiday) => {
  // declare an empty variable
  let formInputs = {
    name: '',
    image: '',
    body: '',
    id: null
  }
  // decide the pageTitle based on the view
  switch (view) {
    case 'home':
      break
    case 'addPost':
      break
    case 'editPost':
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
      <Main
        view={this.state.view}
        handleView={this.handleView}
        formInputs={this.state.formInputs}
        holidays={this.state.holidays} handleCreate={this.handleCreate}
      />
    </div>
  )
}
}
export default App
