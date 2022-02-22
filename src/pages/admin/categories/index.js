// import axios from "axios";
import Nav_Admin from "../../../components/nav_admin";
import { getall_categories, remove_category } from "../../../api/categories";
import { getproduct_withcate } from "../../../api/products";
const AdminCategories = {
    async render() {
        const categories = await getall_categories();
        const test = await getproduct_withcate();
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
               <a href="/admin/categories/add">  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add New Category
</button></a>
       `;
    },
    afterRender(){
        const btns = document.querySelectorAll('.delete_btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function(){
                if(confirm("Are you sure you want to take this action ? ")){
                    remove_category(id)
                  document.getElementById("row_"+id).style.display = 'none';
                }
            })
        });
    }
}
export default AdminCategories;