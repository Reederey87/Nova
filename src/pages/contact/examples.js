import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>About NOVA</h1>
         <h2>Vision</h2>
              <p>
                To be an expert resource and the most reliable and responsive global logistics partner for our clients.
              </p>
              <h2>Mission</h2>
              <p>
                To be a "True" partner with our clients and always deliver the most effective and efficient solutions.
              </p>
      <h1>Have Questions?</h1>
                <li>
                  <Link to="/contact">Basic contact form</Link>
                </li>
      <h1>Ready to Ship?</h1>
                <li>
                  <Link to="/contact/file-upload/">Send us official inquiry file</Link>
                </li>

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
