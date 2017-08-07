// / CheckoutForm.js
import React from 'react';
import { withRouter } from 'react-router';
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

  calculateTotal() {
    let { songs } = this.props;
    if (songs.length === 0) return 0;
    if (songs.length === 1) return 3;
    if (songs.length === 2) return 5;
    return songs.length * 2;

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
    this.props.stripe.createToken({ name })
      .then((res) => {
        if (res.error) return alert(res.error.message)
        return this.props.vote(res.token, this.name.value, this.email.value)
          .then(() => {
            this.props.router.push('/results');
          });
      })
      .catch((err) => {
        alert(JSON.parse(err.request.responseText).message)
      });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="index-container">
        <div className="checkout-input"><TextInput
          type="text"
          name="name"
          className="text-input"
          placeholder="name"
          cref={(ref) => this.name = ref}
          error={this.state.error.name}
        /></div>
        <div className="checkout-input"><TextInput
          type="email"
          name="email"
          className="text-input"
          placeholder="email"
          cref={(ref) => this.email = ref}
          error={this.state.error.email}
        /></div>

        <div className="checkout-input"><CardNumberElement style={{base: {lineHeight: '50px'}}}/></div>
        <div className="checkout-input"><CardExpiryElement style={{base: {lineHeight: '50px'}}}/></div>
        <div className="checkout-input"><CardCVCElement style={{base: {lineHeight: '50px'}}}/></div>
        <div className="checkout-input"><PostalCodeElement style={{base: {lineHeight: '50px'}}}/></div>
        <button>Confirm order</button>
      </form>
    );
  }
}

export default withRouter(injectStripe(CheckoutForm));
