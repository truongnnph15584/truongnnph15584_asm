import axios from "axios";
import { add_category } from "../../../api/categories";
const AddCategory = {
    async render(id) {
        return /* html */`
        <main>
        <form id="formEdit">
            <div class="title">
                <h3>Add Pategory</h3>
            </div>
            <div class="input" enctype="multipart/form-data">
                <input type="text" name="name_input" value="" required id="input_name" autocomplete="off" placeholder="Name"> <br>
            </div>
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
        formEdit.addEventListener('submit', async function (e) {
            e.preventDefault();
            add_category({
                id: id,
                cate_name: document.getElementById("input_name").value,
            })
        })
    }
}
export default AddCategory;