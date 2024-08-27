// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContent = () => {
        onToggleShowContent(showContent)
      }

      const changeLeftNavbar = () => {
        onToggleShowLeftNavbar(showLeftNavbar)
      }

      const changeRightNavbar = () => {
        onToggleShowRightNavbar(showRightNavbar)
      }

      return (
        <div className="cc-container">
          <h1> Layout</h1>
          <div className="input-container">
            <input onChange={changeContent} id="content" type="checkbox" />
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-container">
            <input
              onChange={changeLeftNavbar}
              id="Left Navbar"
              type="checkbox"
            />
            <label htmlFor="Left Navbar">Left Navbar</label>
          </div>
          <div className="input-container">
            <input
              onChange={changeRightNavbar}
              id="Right Navbar"
              type="checkbox"
            />
            <label htmlFor="Right Navbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
