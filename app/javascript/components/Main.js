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
  handleCreate = (createData) => {
    fetch('/holidays', {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
      'Accept': 'application/json, text/plain' ,
      'Content-Type': 'application/json'
    },
  })
  console.log(createData)
    // .then(jsonedHoliday => {
    //   return jsonedHoliday.json()
    // })
    // .then(jsonedHoliday => {
      
    //   // update state with our new post
    //   this.setState(prevState => {
    //     this.prevState.holidays.push(jsonedHoliday)
    //     return { holidays: prevState.holidays }
    //   })
    // })
    // .catch(err => console.log(err))

    
}
  componentDidMount() {
    this.fetchHolidays()
  }
  render () {
    return (
    <div>
      <Form
        handleCreate={this.handleCreate}
        // handleUpdate={this.handleUpdate}
        formInputs={this.props.formInputs}
        view={this.props.view}
      />
      <div className="holidays-list">
        {this.state.holidays.map((holiday, index ) =>
          <Holiday
            key={index}
            holiday={holiday} 
            handleView={this.props.handleView}
            // holidays={this.state.holidays} handleCreate={this.handleCreate}
          />
        )}
      </div>
    </div>
  )}
}


export default Main
