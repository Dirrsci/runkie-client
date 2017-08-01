// / CheckoutForm.js
import React from 'react';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement } from 'react-stripe-elements';
import TextInput from '../../../components/shared/TextInput';

// import AddressSection from './AddressSection';
// import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)

    // inital error state
    this.state = {
      error: {
        name: false,
        email: false
      }
    }
  }

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault()

    this.setState({ error: {} })

    const name = this.name.value
    const email = this.email.value
    if (!name) {
      this.setState({ error: { name: true } })
      return alert('Missing name')
    }
    if (!email) {
      this.setState({ error: { email: true } })
      return alert('Missing email')
    }

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Jenny Rosen'})
      .then((res) => {
        if (res.error) return alert(res.error.message)
        return this.props.vote(res.token, this.name.value, this.email.value)
      })
      .then(() => {
        console.log('done voting');
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
          error={this.state.error.name}
        />
        <TextInput
          type="email"
          name="email"
          className="text-input"
          placeholder="email"
          cref={(ref) => this.email = ref}
          error={this.state.error.email}
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
