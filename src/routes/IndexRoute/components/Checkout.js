// / CheckoutForm.js
import React from 'react';
import {injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement} from 'react-stripe-elements';

// import AddressSection from './AddressSection';
// import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault()

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Jenny Rosen'}).then((res) => {
      if (res.error) return alert(res.error.message)
      console.log('Received Stripe token:', res.token)
      this.props.vote(res.token)
    })

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="index-container">
        name,
        email
        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
        <PostalCodeElement />
        {/* <AddressSection />
        <CardSection /> */}
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
