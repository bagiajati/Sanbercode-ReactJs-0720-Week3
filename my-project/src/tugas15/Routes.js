import React from 'react'
import { Switch, Link, Route } from 'react-dom'

import DataBuah from '../tugas11/DataBuah'
import Timer from '../tugas12/Timer'
import Tugas13 from '../tugas13/Tugas13'
import Tugas14 from '../tugas14/Tugas14'

const Routes = () => {
    return (
    <>
        <nav>
            <ul>
                <li><Link to="/t11">Tugas 11</Link></li>
                <li><Link to="/t12">Tugas 12</Link></li>
                <li><Link to="/t13">Tugas 13</Link></li>
                <li><Link to="/t14">Tugas 14</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/t11">< DataBuah /></Route>
            <Route path="/t12" component={Timer} />
            <Route path="/t13">< Tugas13 /></Route>
            <Route path="/t14">< Tugas14 /></Route>
        </Switch>
    </>
    )
}

export default Routes;