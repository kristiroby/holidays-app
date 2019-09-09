


// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Aside extends React.Component {
    // ==============
    // RENDER
    // ==============
    render () {
        return (
            <aside>
                <ul>
                    <li onClick={() => {this.props.handleView('home')}}>home</li>
                    <li onClick={() => {this.props.handleView('addHoliday')}}>add holiday</li>
                </ul>
            </aside>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Aside
