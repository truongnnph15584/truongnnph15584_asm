// import axios from "axios";
import { get_product } from "../api/products";
const Cart = {
  async render() {

    let list_cart = localStorage.getItem('cart');
    var product = [];
    list_cart = list_cart.split(',')
    for (var i = 1; i <= list_cart.length - 1; i++) {
      product[i] = await get_product(list_cart[i])
      product[i] = product[i].data
    }

    return /* html */`
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
              ${product.map((item) => /* html */`
              <tr>
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
               <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l"> - </button>
                 <input type="text"  value="" class="w-8/12 font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                 <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r">+</button>
                 </div>
             </div>
              </td>
              <td class="hidden text-right md:table-cell">
                <span class="text-sm lg:text-base font-medium">
                  10.00€
                </span>
              </td>
              <td class="text-right">
                <span class="text-sm lg:text-base font-medium">
                  20.00€
                </span>
              </td>
              <td class="text-right">
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded delete_btn ">Delete</button></td>
            </td>
            </tr> `
    ).join("")}
              </tbody>
            </table>
        </div>
      </div>
        `;
  },
}


export default Cart