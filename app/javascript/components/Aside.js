


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
                <nav>
                <ul>
                    <div className="home-add">
                    <li onClick={() => {this.props.handleView('home')}}>Home</li>
                    <li onClick={() => {this.props.handleView('addHoliday')}}>Add Holiday</li>
                    </div>
                </ul>
                </nav>
            </aside>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Aside