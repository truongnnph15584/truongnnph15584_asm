// import axios from "axios";

import { getall_products } from "../api/products";
import { add_to_cart } from "../utils/cart";

const products = {
  async render() {
    const { data } = await getall_products();
    return /* html */ `
        
        <div class="new_product bg-slate-800 w-full h-auto px-44 py-16">
        <div class="title text-slate-200">
          <h1 class="py-12 text-4xl font-bold">Products</h1>
        </div>
        <div class="ml-96 pl-96 flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
      <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
        <div class="list text-slate-200 grid grid-cols-4 gap-5 pb-2">
        ${data.map((item) => /* html */`
        <div class="item shadow-md">
        <a class=" text-white" href="/products/${item.id}">
        <div class="img">
          <img src="./src/image/products/${item.img}" alt="">
        </div>
        <div class="text">
          <div class="name_price flex justify-between px-1 pt-2">
            <span class="font-bold" >${item.product_name.slice(0, 10)}...</span>
            <span class="font-bold">price: <span class="text-rose-500">${item.price}</span></span>
          </div>
          </a>
          <div class="bt flex justify-between pt-3">
          <button data-id="${item.id}" class="bg-red-700 w-1/2 py-1 mx-1 text-center text-white add_cart">Add to Cart</button>
          <button class="bg-red-700 w-1/2 py-1 mx-1 text-center text-white">Buy Now</button>
          </div>
        </div>
      </div>
      `
    ).join("")}
        </div>
      </div>     
        `;
  },
  afterRender() {
    const add_cart = document.querySelectorAll('.bt > .add_cart');
    add_cart.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', async function () {
        add_to_cart(id)
      })
    });
  }
}
export default products;