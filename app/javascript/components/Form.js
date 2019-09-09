import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
        name: '',
        description: '',
        date: '',
        id: null
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
      e.preventDefault()
      // if the current view is addPost
      // create the post
      if (this.props.view.page === 'addHoliday') {
          this.props.handleCreate(this.state)
      } else if (this.props.view.page === 'editHoliday') {
          // update the post
          this.props.handleUpdate(this.state)
      }
  }
  
  componentDidMount() {
    this.setState({
      name: this.props.formInputs.name,
      description: this.props.formInputs.description,
      date: this.props.formInputs.date,
      id: this.props.formInputs.id
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
        <input type="text" placeholder="holiday name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          description
        <input type="text" placeholder="holiday description" id="description" value={this.state.description} onChange={this.handleChange}/>
        </label>
        <label>
          date
        <input type="text" placeholder="YYYY-MM-DD" id="date" value={this.state.date} onChange={this.handleChange} />
        </label>
        <input type="submit" value="enter"/>
      </form>
    )
  }
}
export default Form