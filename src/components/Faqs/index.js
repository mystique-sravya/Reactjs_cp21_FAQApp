// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(each => (
              <FaqItem key={each.id} faqDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
