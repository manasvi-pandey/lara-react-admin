import { Link } from 'react-router-dom'

export default function Sidebar () {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light">Lara React Admin</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="img/user-1.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Manasvi Pandey</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* <li className="nav-item has-treeview menu-open">
                                <a className="nav-link active">
                                    <ion-icon name="cog-outline"></ion-icon>
                                    &nbsp;
                                    <p>
                                        Dropdown &nbsp;
                                        <ion-icon name="chevron-forward-outline"></ion-icon>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i> &nbsp;
                                            <p>Dropdown Item 1</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    <i class="fab fa-acquisitions-incorporated"></i>
                                    <p>
                                    Manage Stores
                                    </p>
                                </Link>
                            </li>
                            {/* <li className="nav-header">EXAMPLES</li> */}
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    <ion-icon name="grid-outline"></ion-icon> &nbsp;
                                    <p>
                                    Manage Categories
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    <ion-icon name="image-outline"></ion-icon> &nbsp;
                                    <p>
                                    Manage Products
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}