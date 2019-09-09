import React from 'react'

class Holiday extends React.Component {
 render () {
  return (
<<<<<<< HEAD
      <div className="holiday-info">
          Name: {this.props.holiday.name} <br/>
          Description: {this.props.holiday.description} <br/>
          Date: {this.props.holiday.date}
          <div className="edit-delete">
              <ul>
                  <li onClick={() => {this.props.handleView('editHoliday', this.props.holiday)}}>Edit</li>
                  <li  onClick={() => {this.props.handleDelete(this.props.holiday.id)}}>Delete</li>
              </ul>
          </div>
      </div>
=======
    <div className="holiday-info">
        Name: {this.props.holiday.name} <br/>
        Description: {this.props.holiday.description} <br/>
        Date: {this.props.holiday.date}
        <div className="edit-delete">
          <ul>
              <li onClick={() => {this.props.handleView('editHoliday', this.props.holiday)}}>Edit</li>
              <li  onClick={() => {this.props.handleDelete(this.props.holiday.id)}}>Delete</li>
          </ul>
        </div>
    </div>
>>>>>>> 009152f7be99458878c075fb023a24e826712f6d
  )
  }
}

export default Holiday
