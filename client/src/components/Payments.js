import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name={"Survely"}
        description={"Pay US5 for 5 credits"}
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credit
        </button>
      </StripeCheckout>
    )
  }
}

export default Payments;