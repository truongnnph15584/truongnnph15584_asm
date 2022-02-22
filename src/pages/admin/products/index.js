// import axios from "axios";
import Nav_Admin from "../../../components/nav_admin";
import { getall_products, getproduct_withcate, remove_products } from "../../../api/products";
const AdminProducts = {
    async render() {
        const products = await getall_products();
        const test = await getproduct_withcate();
        return /* html */`
           <!--Container-->
                     <div class="container w-full mx-auto pt-20">
                     ${Nav_Admin.render()}
                             <h1 class="py-12 text-4xl font-bold text-primary-400">Products</h1>
                                   <table class="table-auto w-full">
                                       <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                           <tr class ="bg-primary h-12 text-white">
                                               <th class="p-2 whitespace-nowrap">
                                                   <div class="font-semibold text-left">Product Name</div>
                                               </th>
                                               <th class="p-2 whitespace-nowrap">Image</div>
                                               </th>
                                               <th class="p-2 whitespace-nowrap">
                                                   <div class="font-semibold text-left">Price</div>
                                               </th>
                                               <th class="p-2 whitespace-nowrap">Sale</div>
                                               <th class="p-2 whitespace-nowrap">Categories</div>
                                               <th class="p-2 whitespace-nowrap">Edit</div>
                                               <th class="p-2 whitespace-nowrap">Delete</div>
                                           </tr>
                                       </thead>
                                       <tbody class="text-sm divide-y divide-gray-100">
                                       ${products.data.map((item) => /* html */`
                                       <tr id ="row_${item.id}">
                                       <td class="p-2 whitespace-nowrap">
                                           <div class="flex items-center">
                                               <div class="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3">
                                               <div class="font-medium text-gray-800">${item.product_name}</div>
                                           </div>
                                       </td>
                                       <td class="p-2 whitespace-nowrap">
                                       <img class="rounded-full" src="../src/image/products/${item.img}" width="40" height="40" alt="Alex Shatov"></div>
                                       </td>
                                       <td class="p-2 whitespace-nowrap">
                                           <div class="text-left font-medium text-green-500">${item.price}</div>
                                       </td>
                                       <td class="p-2 whitespace-nowrap">
                                       <div class="text-left font-medium text-green-500">${item.sale}%</div>
                                   </td>
                                   <td class="p-2 whitespace-nowrap">
                                   <div class="text-left font-medium text-green-500">${item.categoryProductId}</div>
                               </td>
                               <td class="p-2 whitespace-nowrap">
                               <a href="/admin/products/${item.id}/edit"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button></a>
                           </td>
                           <td class="p-2 whitespace-nowrap">
                           <button data-id="${item.id}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded delete_btn ">Delete</button></td>
                                   </tr>`
        ).join("")}
                                       </tbody>
                                   </table>
               </div>
               <a href="/admin/products/add">  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add New Product
</button></a>
       `;
    },
    afterRender(){
        const btns = document.querySelectorAll('.delete_btn');
        console.log(btns)
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function(){
                if(confirm("Are you sure you want to take this action ? ")){
                    remove_products(id)
                  document.getElementById("row_"+id).style.display = 'none';
                }
            })
        });
    }
}
export default AdminProducts;