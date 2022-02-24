// import axios from "axios";

import { get_product } from "../api/products";
import { remove_Item_cart, increaseQuantity, prveQuantity } from "../utils/cart";
const Cart = {
  async render() {

    let list_cart = JSON.parse(localStorage.getItem('cart'));
    return /* html */`
    <div class="container w-full px-3 py-3">
    <div class="title">
    <h1 class="py-12 text-5xl font-bold ml-44">Cart</h1>
  </div>
    <div class="flex justify-center my-6">
    <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
      <div class="flex-1">
        <table class="w-full text-sm lg:text-base" cellspacing="0">
          <thead>
            <tr class="h-12 uppercase">
              <th class="hidden md:table-cell"></th>
              <th class="text-left">Product</th>
              <th class="lg:text-right text-left pl-5 lg:pl-0">
                <span class="lg:hidden" title="Quantity">Qtd</span>
                <span class="hidden lg:inline">Quantity</span>
              </th>
              <th class="hidden text-right md:table-cell">Unit price</th>
              <th class="text-right">Total price</th>
              <th class="text-right">Delete</th>
            </tr>
          </thead>
          <tbody>
          ${list_cart.map((item) => /* html */`
          <tr id="row_${item.id}">
          <td class="hidden pb-4 md:table-cell">
            <a href="#">
              <img src="./src/image/products/${item.img}" class="w-20 rounded" alt="Thumbnail">
            </a>
          </td>
          <td>
            <a href="#">
              <p class="mb-2 md:ml-4">${item.product_name}</p>
            </a>
          </td>
          <td class="justify-center md:justify-end md:flex mt-6">
            <div class="w-20 h-10">
              <div class="relative flex flex-row w-full h-8">
           <button data-id="${item.id}"  class=" prev bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l"> - </button>
             <input type="text" value="${item.quantity}" id="quantity_${item.id}" class="quantity w-8/12 font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
             <button data-id="${item.id}"  class=" plus bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r">+</button>
             </div>
         </div>
          </td>
          <td class="hidden text-right md:table-cell">
            <span class="price text-sm lg:text-base font-medium">
            ${item.price}
            </span>
          </td>
          <td class="text-right">
            <span class="total text-sm lg:text-base font-medium">
               
            </span>
          </td>
          <td class="text-right">
          <button data-id="${item.id}" class=" delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded delete_btn ">Delete</button></td>
        </td>
        </tr> `
    ).join("")}
          </tbody>
        </table>
    </div>
  </div>
  
</div>
   <div class="border-t border-gray-200 absolute right-60 w-4/6 py-6 px-4 sm:px-6 ">
            <div class="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p id="subtotal" >0</p>
            </div>
           <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div class="mt-6">
              <a href="/checkout" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
            </div>
            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
              </p>
            </div>
          </div>
        </div>
    `;
  },
  afterRender() {
    const prices = document.getElementsByClassName("price")
    const quantity = document.getElementsByClassName("quantity")
    const total = document.getElementsByClassName("total")
    const delete_item = document.querySelectorAll(".delete")
    var convert_total = [];
    const plus_bt = document.querySelectorAll(".plus")
    const prev_bt = document.querySelectorAll(".prev")
    const subtotal = document.getElementById("subtotal")
    var sum = 0;



    for (var i = 0; i <= total.length - 1; i++) {
      total[i].innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(prices[i].innerHTML) * Number(quantity[i].value));
      prices[i].innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(prices[i].innerHTML));
      convert_total[i] = total[i].innerHTML.replace("&nbsp;₫", "");
      convert_total[i] = convert_total[i].replace(".", "");

      sum = sum + Number(convert_total[i])
    }
    subtotal.innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sum);


    delete_item.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', function () {
        if (confirm("Are you sure you want to take this action ? ")) {
          remove_Item_cart(id)
          document.getElementById("row_" + id).style.display = 'none';
        }
      })
    });
    plus_bt.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', function () {
        const ud_quantity = document.querySelector("#quantity_" + id);
        ud_quantity.value = increaseQuantity(id)
      })
    });
    prev_bt.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', function () {
        const ud_quantity = document.querySelector("#quantity_" + id);
        ud_quantity.value = prveQuantity(id)
      })
    });

  }
}


export default Cart
