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
        btn.addEventListener('click', async function(){
           add_to_cart(id)
        })
    });
  }
}
export default products;