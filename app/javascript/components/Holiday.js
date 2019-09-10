import React from 'react'

class Holiday extends React.Component {
 render () {
  return (
    <div className="holiday-info">
        <strong>Name</strong>: {this.props.holiday.name} <br/>
        <strong>Description:</strong> {this.props.holiday.description} <br/>
        <strong>Date:</strong> {this.props.holiday.date}
        <div className="edit-delete">
          <ul>
              <li onClick={() => {this.props.handleView('editHoliday', this.props.holiday)}}>Edit</li>
              <li  onClick={() => {this.props.handleDelete(this.props.holiday.id)}}>Delete</li>
          </ul>
        </div>
    </div>
  )
  }
}

export default Holiday
