import { getall_products } from "../../api/products";
import { getall_users } from "../../api/users";
import { getall_categories } from "../../api/categories";
import Nav_Admin from "../../components/nav_admin";
const dashboard = {
    async render() {
        const users = await getall_users();
        const new_user = users.data.reverse().slice(0, 5)
        return /* html */`
           <!--Container-->
           <div class="container w-full mx-auto pt-20">
           ${Nav_Admin.render()}
                             <h1 class="py-12 text-4xl font-bold text-primary-400">New users</h1>
                                   <table class="table-auto w-full">
                                       <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                           <tr class ="bg-primary h-12 text-white">
                                               <th class="p-2 whitespace-nowrap">
                                                   <div class="font-semibold text-left">Full Name</div>
                                               </th>
                                               <th class="p-2 whitespace-nowrap">
                                                   <div class="font-semibold text-left">Email</div>
                                               </th>
                                               <th class="p-2 whitespace-nowrap">
                                                   <div class="font-semibold text-left">Age</div>
                                               </th>
                                           </tr>
                                       </thead>
                                       <tbody class="text-sm divide-y divide-gray-100">
                                       ${new_user.map((item) => /* html */`
                                       <tr>
                                       <td class="p-2 whitespace-nowrap">
                                           <div class="flex items-center">
                                               <div class="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3">
                                               <img class="rounded-full" src="../src/image/avatar/${item.avt}" width="40" height="40" alt="Alex Shatov"></div>
                                               <div class="font-medium text-gray-800">${item.full_name}</div>
                                           </div>
                                       </td>
                                       <td class="p-2 whitespace-nowrap">
                                           <div class="text-left">${item.email}</div>
                                       </td>
                                       <td class="p-2 whitespace-nowrap">
                                           <div class="text-left font-medium text-green-500">${item.age}</div>
                                       </td>
                                   </tr>`
                     ).join("")}
                                       </tbody>
                                   </table>
               </div>
           </div>
       `;
    }
}

export default dashboard