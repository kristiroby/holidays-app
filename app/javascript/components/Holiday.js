import React from 'react'

class Holiday extends React.Component {
 render () {
  return (
    <div className="holiday-info">
        {this.props.holiday.name} <br/>
        {this.props.holiday.description} <br/>
        {this.props.holiday.date.iso}
        <div className="edit-delete">
            <ul>
                <li onClick={() => {this.props.handleView('editHoliday', this.props.holiday)}}>Edit</li>
                <li>Delete</li>
            </ul>
        </div>
    </div>
  )
  }
}

export default Holiday
