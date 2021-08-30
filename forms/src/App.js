import { Nav } from 'react-bootstrap'
import { IoMdMenu } from 'react-icons/io'
import Forms from './pages/private/forms/Forms';
// import Dashboard from './pages/private/dashboard/Dashboard'
import Home from './pages/private/home/Home'

function App() {
  return (
    <div className="app-wrapper">
      {/* <Dashboard /> */}

      {/* Header */}
      <div className="header d-flex">
        <div className="header-left d-flex plr-15">
          <div className="logo-wrapper">
            <h2 className="h2">LOGO</h2>
          </div>
          <div className="leftmenu-icon">
            <IoMdMenu className="icon" />
          </div>
        </div>
        <div className="header-right d-flex plr-15">
          <p></p>
        </div>
      </div>

      {/* Left Menu - Content */}
      <div className="left-menu-content d-flex">
        <div className="left-menu">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Forms</Nav.Link>
            <Nav.Link eventKey="link-1">Supplier Incentive Search Form</Nav.Link>
            <Nav.Link eventKey="link-2">Tracking Form</Nav.Link>
            <Nav.Link eventKey="link-3">Member Search Form</Nav.Link>
            <Nav.Link eventKey="link-4">Excell File Processing</Nav.Link>
            {/* <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link> */}
          </Nav>
        </div>
        <div className="content-wrapper p-15">
          {/* Forms */}
          <Forms />

          {/* Home */}
          {/* <Home /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
