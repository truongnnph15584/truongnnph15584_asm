import axios from "axios";
import { add_product } from "../../../api/products";
import { getall_categories } from "../../../api/categories";
const AddProducts = {
    async render(id) {
        const categories = await getall_categories();
        return /* html */`
        <main>
        <form id="formEdit">
            <div class="title">
                <h3>Add Product</h3>
            </div>
            <div class="input" enctype="multipart/form-data">
                <input type="text" name="name_input" value="" required id="input_name" autocomplete="off" placeholder="Name"> <br>
                <input type="text" name="price_input" value="" required id="input_price" autocomplete="off" placeholder="Price"> <br>
                <input type="file" id="img_pr">
                <input type="text" style="visibility: hidden;" readonly value="" id="img_pr_old">
            </div>
            <select name="" id="edit_cate">
            ${categories.data.map((item) => /* html */`
             <option value="${item.id}">${item.cate_name}</option>`
             ).join("")}

        </select>
            <div class="sale-view">
                <input type="text" id="sale" value="" name="sale" required autocomplete="off" placeholder="Sale">
                <input type="text" id="view" value="" name="view" required autocomplete="off" placeholder="View">
            </div>
            <textarea name="" id="edit_desc" cols="40" rows="12"></textarea>
            <div class="bt">
               <button id="bt" name="submit" type="submit"><i class="fas fa-arrow-right"></i></button><br>
            </div>
        </form>
    </main>
    <style>
      * {
    padding: 0px;
    margin: 0px;
}

body {
    font-family: sans-serif;
    background-imview: url(./src/imview/background-lg_rg.jpg);
    background-attachment: fixed;
    background-size: cover;
    height: 900px;
}
   main {
    position: absolute;
    left: 45%;
    }

    main .img {
        width: 400px;
        overflow: hidden;
        height: 610px;
    }

    main .img img {
        margin-left: -150%;
        width: 300%;
    }

    main form {
        background-color: white;
        width: 600px;
        height: 660px;
        margin-left: -35%;
        padding-top:2%;
        margin-top:10%;
    }

    main form .title {
        margin-left: 10%;
        margin-top: 10%;
        margin-bottom: 20px;
    }

    main form .title h3 {
        font-size: 30px;
    }
    main form #img_pr,#edit_cate{
        margin-left: 10%;
        margin-top: 5%;
    }
    main form textarea{
        border:1px  solid black;
        margin-left: 10%;
        margin-top: 5%;
    }
    main form .sale-view {
        width: 79%;
        margin-left: 10%;
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

    main form .sale-view #sale,
    main form .sale-view #view {
        margin-top: 15%;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        outline: none;
        font-size: 16px;
        padding: 2% 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.199);
    }

    main form .sale-view #view {
        margin-left: 10px;
    }

    main form .input {
        position: relative;
    }

    main form .input #vali {
        color: #BC252A;
        font-size: 13px;
        position: absolute;
        left: 10%;
        top: 35%;
        display: none;
    }

    main form .input #input_price,
    main form .input #input_pass,
    #input_name {
        margin-left: 10%;
        margin-top: 5%;
        width: 79%;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        outline: none;
        font-size: 16px;
        padding: 2% 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.199);
    }


    main form .bt {
        text-align: center;
        margin-top: 10%;
    }

    main form .bt button {
        width: 90px;
        height: 81px;
        background-color: #D13639;
        border: 2px solid #EDEDED;
        border-radius: 30px;
        margin-bottom: 6%;
        cursor: pointer;
    }

    main form .bt button:hover {
        background-color: #BC252A;
    }

    main form .bt button i {
        font-size: 35px;
        font-weight: 700;
        color: #EDEDED;
        padding: 20px;
    }

    main form .bt a span {
        font-size: 12px;
        font-weight: bold;
    }

    main form .bt a p {
        padding-top: 10px;
        font-size: 12px;
        font-weight: bold;
    }

    footer {
        position: absolute;
        bottom: -30%;
        left: 50%;
        transform: translate(-50%, 0%);
        text-align: center;
        color: white;
    }

    footer span {
        font-size: 11px;
        font-weight: bold;
        color: #DBDBDB;
    }

    footer #dk {
        font-size: 9px;
        color: #6c7272;
    }
    .login{
        margin-top: -15px;
        text-align: center;
        font-size: 0.638435832211083rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-weight: 800;
        color: #111;
    }
</style>
       `;
    },
    afterRender(id) {
        const formEdit = document.querySelector('#formEdit');
        const CLOUDINARY_PRESET_KEY = "wg5bg0yn";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ddurgnqo9/";
        let file = document.getElementById('img_pr');
        formEdit.addEventListener('submit', async function (e) {
            e.preventDefault();
            // file = file.value.replace("C:\\fakepath\\",'');
            // console.log(file)
            // const formData = new FormData();
            // formData.append('file', file);
            // formData.append('upload_preset', CLOUDINARY_PRESET_KEY);
            // const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
            //     headers: {
            //         "Content-Type": "application/form-data"
            //     }
            // })
            add_product({
                id: id,
                product_name: document.getElementById("input_name").value,
                price: document.getElementById("input_price").value,
                img: "image_1.jfif",
                description: document.getElementById("edit_desc").value,
                sale: document.getElementById("sale").value,
                view: document.getElementById("view").value,
                categoryProductId: document.getElementById("edit_cate").value
            })
        })
    }
}
export default AddProducts;