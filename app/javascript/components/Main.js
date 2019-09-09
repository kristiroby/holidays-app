import React from 'react'
import Holiday from './Holiday.js'
import Form from './Form.js'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: [],
      searchURL: 'https://calendarific.com/api/v2/holidays?api_key=98afab6a63c5dfa88360a097e4dca27d8fc3ba54a2d06a038fa89eb9e75f5a8e&country=US&year=2019'
    }
  }

  fetchHolidays = () => {
    fetch(this.state.searchURL)
    .then(response => response.json())
    .then(jData => {
      this.setState({holidays: jData.response.holidays})
    })
  }
  // create new holiday
  handleCreate = (createData) => {
    fetch('/holidays', {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
      'Accept': 'application/json, text/plain' ,
      'Content-Type': 'application/json'
    }
  })
    .then(newHoliday => {
      return newHoliday.json()
    })
    .then(newHoliday => {
      this.props.handleView('home')
      // update state with our new post
      this.setState(prevState => {
        prevState.holidays.push(newHoliday)
        return { holidays: prevState.holidays }
      })
    })
    .catch(err => console.log(err))
  }
// edit holiday
  handleUpdate = (updateData) => {
    fetch(`/holidays/${updateData.index}`,{
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      }
    }) .then(updatedHoliday => {
    // switch back to the home view
    this.props.handleView('home')
    // call this.fetchPosts to show the updated post immediately
    this.fetchHolidays()
  })
    .catch(err => console.log(err))
}

  componentDidMount() {
    this.fetchHolidays()
  }
  render () {
    return (
    <div>
      <div className="holidays-list">
        {this.props.view.page === 'home'
            ? this.state.holidays.map((holiday, id) =>
          <Holiday
            key={holiday.id}
            holiday={holiday} 
            handleView={this.props.handleView}
            // holidays={this.state.holidays} handleCreate={this.handleCreate}
          />
        )
        :
          <Form
            handleCreate={this.handleCreate}
            handleUpdate={this.handleUpdate}
            formInputs={this.props.formInputs}
            view={this.props.view}
          />
        }
      </div>
    </div>
  )}
}


export default Main
