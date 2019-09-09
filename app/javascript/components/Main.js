import React from 'react'
import Holiday from './Holiday.js'
import Form from './Form.js'
import Aside from './Aside.js'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: [],
    }
  }

  fetchHolidays = () => {
    fetch('/holidays/')
    .then(response => response.json())
    .then(jData => {
      console.log(jData)
      this.setState({holidays: jData})
    })
  }
  // create new holiday
  handleCreate = (createData) => {
    fetch('/holidays/', {
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
      // update state with our new holiday
      this.setState(prevState => {
        prevState.holidays.push(newHoliday)
        return { holidays: prevState.holidays }
      })
    })
    .catch(err => console.log(err))
  }
// edit holiday
  handleUpdate = (updateHoliday) => {
    fetch(`/holidays/${updateHoliday.id}`,{
      body: JSON.stringify(updateHoliday),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      }
    }) .then(updateHoliday => {
    // switch back to the home view
    this.props.handleView('home')
    // call this.fetchHolidays to show the updated holiday immediately
    this.fetchHolidays()
  })
    .catch(err => console.log(err))
}

//delete
  handleDelete = (id) => {
    fetch(`/holidays/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(json => {
        // this.fetchHolidays()
        this.setState(prevState => {
          const holidays = prevState.holidays.filter( holiday => holiday.id !== id)
          return { holidays }
        })
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
            ? this.state.holidays.map((holiday) =>
          <Holiday
            key={holiday.id}
            holiday={holiday}
            handleView={this.props.handleView}
            handleDelete={this.handleDelete}
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
