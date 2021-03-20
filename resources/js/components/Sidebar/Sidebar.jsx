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
                            <li className="nav-item has-treeview menu-open">
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
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <ion-icon name="duplicate-outline"></ion-icon> &nbsp;
                                    <p>
                                    Widgets
                                    <span className="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <ion-icon name="eyedrop-outline"></ion-icon> &nbsp;
                                    <p>
                                    Layout Options
                                    <i className="fas fa-angle-left right"></i>
                                    <span className="badge badge-info right">6</span>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Top Navigation</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/boxed.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Boxed</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Navbar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-footer.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Footer</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Collapsed Sidebar</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">EXAMPLES</li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <ion-icon name="grid-outline"></ion-icon> &nbsp;
                                    <p>
                                    Calendar
                                    <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/gallery.html" className="nav-link">
                                    <ion-icon name="image-outline"></ion-icon> &nbsp;
                                    <p>
                                    Gallery
                                    </p>
                                </a>
                            </li>
                            <li className="nav-header">LABELS</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <ion-icon name="alert-outline"></ion-icon> &nbsp;
                                    <p className="text">Important</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <ion-icon name="bug-outline"></ion-icon> &nbsp;
                                    <p>Warning</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <ion-icon name="construct-outline"></ion-icon> &nbsp;
                                    <p>Informational</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <ion-icon name="construct-outline"></ion-icon> &nbsp;
                                    <p>Informational</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <ion-icon name="construct-outline"></ion-icon> &nbsp;
                                    <p>Informational</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <ion-icon name="construct-outline"></ion-icon> &nbsp;
                                    <p>Informational</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <ion-icon name="construct-outline"></ion-icon> &nbsp;
                                    <p>Informational</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <ion-icon name="construct-outline"></ion-icon> &nbsp;
                                    <p>Informational</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}