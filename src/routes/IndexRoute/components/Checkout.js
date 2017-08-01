// / CheckoutForm.js
import React from 'react';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement } from 'react-stripe-elements';
import TextInput from '../../../components/shared/TextInput';

// import AddressSection from './AddressSection';
// import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    console.log(this.name.value);
    console.log(this.email.value);
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault()

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Jenny Rosen'}).then((res) => {
      if (res.error) return alert(res.error.message)
      this.props.vote(res.token, this.name.value, this.email.value)
    })

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="index-container">
        <TextInput
          type="text"
          name="name"
          className="text-input"
          placeholder="name"
          cref={(ref) => this.name = ref}
        />
        <TextInput
          type="email"
          name="email"
          className="text-input"
          placeholder="email"
          cref={(ref) => this.email = ref}
        />

        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
        <PostalCodeElement />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
