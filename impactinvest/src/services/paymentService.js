const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

class PaymentService {
  async createPaymentIntent(amount, currency = 'usd') {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
      });
      return paymentIntent;
    } catch (error) {
      throw new Error('Payment creation failed: ' + error.message);
    }
  }

  async confirmPayment(paymentIntentId) {
    try {
      const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
      return paymentIntent;
    } catch (error) {
      throw new Error('Payment confirmation failed: ' + error.message);
    }
  }
}

module.exports = new PaymentService();