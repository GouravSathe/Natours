import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(Y
  'pk_test_51NUBf7SBEZ4RRZmF7HY7dX8XVBs3TOz6hYufrZxeu6mdiyS36IG1sBGOZvBbMrtd1YBNzyPCphxoShCISbebUExa00WGXI5ZPm'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
  } catch (error) {
    showAlert('error', error);
  }
};
