// import axios from "axios";
import Nav_Admin from "../../../components/nav_admin";
import { getall_orders } from "../../../api/order";
const orders = {
    async render() {

        return /* html */`
           <!--Container-->
                     <div class="container w-full mx-auto pt-20">
                     ${Nav_Admin.render()}
                             <h1 class="py-12 text-4xl font-bold text-primary-400">Categories</h1>
                                   <table class="table-auto w-full">
                                       <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                           <tr class ="bg-primary h-12 text-white">
                                               <th class="p-2 whitespace-nowrap">
                                                   <div class="font-semibold text-left">Category Name</div>
                                               </th>
                                               <th class="p-2 whitespace-nowrap">Edit</div>
                                               <th class="p-2 whitespace-nowrap">Delete</div>
                                           </tr>
                                       </thead>
                                       <tbody class="text-sm divide-y divide-gray-100">
                                       ${categories.data.map((item) => /* html */`
                                       <tr id ="row_${item.id}">
                                       <td class="p-2 whitespace-nowrap">
                                           <div class="flex items-center">
                                               <div class="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3">
                                               <div class="font-medium text-gray-800">${item.cate_name}</div>
                                           </div>
                                       </td>
                               <td class="p-2 whitespace-nowrap">
                               <a href="/admin/categories/${item.id}/edit"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button></a>
                           </td>
                           <td class="p-2 whitespace-nowrap">
                           <button data-id="${item.id}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded delete_btn ">Delete</button></td>
                                   </tr>`
        ).join("")}
                                       </tbody>
                                   </table>
               </div>
         
       `;
    },
    afterRender(){

    }
}
export default orders;