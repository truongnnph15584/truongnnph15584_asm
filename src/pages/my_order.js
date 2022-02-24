// import axios from "axios";
import { getall_orders,get_order, update_order } from "../api/order";
const My_order = {
    async render() {
        const orders = await getall_orders();

        return /* html */`
           <!--Container-->
           <div class="container w-full mx-auto pt-20">
                   <h1 class="py-12 text-4xl font-bold text-primary-400">Orders</h1>
                         <table class="table-auto w-full">
                             <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                 <tr class ="bg-primary h-12 text-white">
                                     <th class="p-2 whitespace-nowrap">
                                         <div class="font-semibold text-left">Order By</div>
                                     </th>
                                     <th class="p-2 whitespace-nowrap">Status</div>
                                     <th class="p-2 whitespace-nowrap">Action</div>
                                 </tr>
                             </thead>
                             <tbody class="text-sm divide-y divide-gray-100">
                             ${orders.data.map((item) => /* html */`
                             <tr id ="row_${item.id}">
                             <td class="p-2 whitespace-nowrap">
                                 <div class="flex items-center">
                                     <div class="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3">
                                     <div class="font-medium text-gray-800">${item.username}</div>
                                 </div>
                             </td>
                     <td class="status p-2 whitespace-nowrap">
                     ${item.status}
                    </td>
                 <td class="p-2 whitespace-nowrap">
            <button data-id="${item.id}" class=" action bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Received</button>                         </tr>`
        ).join("")}
                             </tbody>
                         </table>
     </div>
       `;
    },
    afterRender() {
        const status = document.getElementsByClassName("status")
        const btns = document.querySelectorAll('.action');
        for (var i = 0; i <= status.length - 1; i++) {
            if (status[i].innerHTML == 0) {
                status[i].innerHTML = "Wait Confirm"
                status[i].style.color = 'red';
                btns[i].style.display = 'none';
            }
            if (status[i].innerHTML == 1) {
                status[i].innerHTML = "Delivery"
                status[i].style.color = 'blue';
            }
            if(status[i].innerHTML == 2) {
                status[i].innerHTML = "Complete"
                status[i].style.color = 'green';
                btns[i].style.display = 'none';
            }
        }
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                var {data} = await get_order(id);
                data.status = 2
                update_order(data)
            })
        });

    }
}
export default My_order;