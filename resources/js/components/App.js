import { Route } from 'react-router-dom'

import './App.css'
import '@fortawesome/fontawesome-free'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import Dashboard from './Dashboard/Dashboard'
import Contact from './Contact/Contact'

export default function App() {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <Route exact path={['/', '/home']}>
                    <Dashboard />
                </Route>
                <Route exact path={['/contact']}>
                    <Contact />
                </Route>
            </div>
            <Footer />
        </div>
    );
}
