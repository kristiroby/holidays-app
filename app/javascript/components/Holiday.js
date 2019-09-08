import React from 'react'

class Holiday extends React.Component {
 render () {
  return (
    <div>
        Name: {this.props.holiday.name} <br/>
        Description: {this.props.holiday.description} <br/>
        Date: {this.props.holiday.date.iso}

    </div>
  )
  }
}

export default Holiday
