import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-menu">
              <h1 className="head">Left Navbar Menu</h1>
              <ul className="unor-list">
                <li className="para">Item 1</li>
                <li className="para">Item 2</li>
                <li className="para">Item 3</li>
                <li className="para">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content-menu">
              <h1 className="head">Content</h1>
              <p className="para">
                Lorem ipsumcbhbchcbbbbbbbbcjdcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbn n
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-navbar-menu">
              <h1 className="head">Right Navbar</h1>
              <div className="btn-c">
                <p type="button" className="btn1">
                  Ad 1
                </p>
                <p type="button" className="btn1">
                  Ad 2
                </p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
