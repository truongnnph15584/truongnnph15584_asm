// import axios from "axios";

import { get_product } from "../api/products";
import { remove_Item_cart, increaseQuantity, prveQuantity } from "../utils/cart";
const Cart = {
  async render() {

    let list_cart = JSON.parse(localStorage.getItem('cart'));
    return /* html */`
    <div class="container">
    <div class="card">
        <div class="payment-details">
            <h3>Payment Details</h3>
            <p>Complete your purchase by providing your payment details.</p>
        </div>
        <div class="input-text"> <input type="text" placeholder="luke@skywalker.com"> <span>Email</span> </div>
        <div class="input-text"> <input type="text" placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d"> <span>Card Details</span> </div>
        <div class="input-text-cvv"> <input type="text" placeholder="mm/yyyy" data-slots="my">
            <!--<span>Card Details</span>-->
        </div>
        <div class="input-text-cvv cvv"> <input type="text" placeholder="000" data-slots="0" data-accept="\d" size="3">
            <!--<span>Card Details</span>-->
        </div>
        <div class="input-text"> <input type="text" placeholder="Username"> <span>Card Holder name</span> </div>
        <div class="billing"> <span>Billing Address</span> <select>
                <option>Select Country</option>
                <option>United States</option>
                <option>India</option>
                <option>England</option>
                <option>France</option>
                <option>Germany</option>
                <option>Japan</option>
                <option>China</option>
                <option>Italy</option>
                <option>Russia</option>
            </select>
            <div class="zip-state">
                <div class="zip"> <input type="text" placeholder="ZIP"> </div>
                <div class="state"> <select>
                        <option>Select State</option>
                        <option>New York</option>
                        <option>New Delhi</option>
                        <option>London</option>
                        <option>Paris</option>
                        <option>Berlin</option>
                        <option>Tokyo</option>
                        <option>Bejing</option>
                        <option>Rome</option>
                        <option>Mosco</option>
                    </select> </div>
            </div>
        </div>
        <div class="input-text"> <input type="text" placeholder="GB0124589"> <span>Vat Number</span> </div>
        <div class="input-text"> <input type="text" placeholder="BLACKWEDNESDAY"> <span>Discount code</span> </div>
        <div class="summary">
            <div class="text-data">
                <p>Subtotal</p>
                <p>Discount</p>
                <p>VAT(20%)</p>
                <h5>Total</h5>
            </div>
            <div class="numerical-data">
                <p>$19.00</p>
                <p>$5.00</p>
                <p>$2.80</p>
                <h5>$16.80</h5>
            </div>
        </div>
        <div class="pay"> <button>Pay</button> </div>
        <div class="secure"> <i class="fa fa-lock"></i>
            <p> Payments are secured and encrypted</p>
        </div>
        <div class="last">
            <p>Powered by Orman Clark</p> <a href="#"> Terms </a> <a href="#"> Privacy </a>
        </div>
    </div>
</div>
    `;
  },
  afterRender() {

  }
}


export default Cart
