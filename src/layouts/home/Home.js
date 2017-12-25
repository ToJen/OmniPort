import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <br/><br/>
            <h1>Welcome!</h1>
            <p>OmniPort lets you control your general public information through a digital identity.</p>
            <hr/>
            <h2>uPort Authentication</h2>
            <p>This dApp is powered by uPort, another dApp on the Ethereum blockchain, which is <em>"a self-sovereign identity and user-centric data platform"</em>.</p>
            <hr/>
            <h2>Why OmniPort?</h2>
            <p>
            Many times, we register or sign up in different restaurants, banks, supermarkets and so on because we want to receive certain services from them or be notified of any updates.
            Over time, we forget where we have given out our data and do not know who else has access to it. We are also faced with the challenge of having to manually update our credentials at these places only when we are physically present.
            With OmniPort, you can view every place you have ever been registered in, selectively restrict the data you've given out, revoke access to your data and update your public general information from one spot which reflects to all allowed entities.
            </p>
            <h3>Usage</h3>
            <p><strong>NOTE</strong>: You will have to download the uPort mobile app from the App Store or Google Play</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with uPort.</p>
            <hr/>
            <h3>Future Enhancements</h3>
            <ul>
              <li>Choose the data sent to each entity</li>
              <li>View all registered entities in the Profile page.</li>
              <li>Set an expiry date for each place</li>
            </ul>
          </div>
        </div>
        <br/>
        <a href="https://github.com/ToJen/OmniPort" target="_blank">GitHub Source Code</a>
      </main>
    )
  }
}

export default Home
