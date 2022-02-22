import { $ } from "../utils/selector";
import { register_user } from "../api/users";
const register = {
    render() {
        return /* html */`<main>
        <form id="formRegister">
            <div class="title">
                <h3>REGISTER</h3>
            </div>
            <div class="input">
                <input type="text" name="fullname_input" required id="input_fullname" autocomplete="off" placeholder="Full Name"> <br>
                <input type="text" name="name_input" required id="input_name" autocomplete="off" placeholder="Name"> <br>
                <input type="password" name="pass_input" required id="input_pass" autocomplete="off" placeholder="Password"> <br>
            </div>
            <div class="email-age">
                <input type="text" id="email" name="email" required autocomplete="off" placeholder="Email">
                <input type="text" id="age" name="age" required autocomplete="off" placeholder="Age">
            </div>
            <div class="bt">
               <button id="bt" name="submit" type="submit"><i class="fas fa-arrow-right"></i></button><br>
            </div>
            <div class="login">
                <a href="/login"> YOU HAVE AN ACCOUNT ?</a>
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
    background-image: url(./src/image/background-lg_rg.jpg);
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

    main form .email-age {
        width: 79%;
        margin-left: 10%;
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

    main form .email-age #email,
    main form .email-age #age {
        margin-top: 15%;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        outline: none;
        font-size: 16px;
        padding: 2% 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.199);
    }

    main form .email-age #age {
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

    main form .input #input_name,
    main form .input #input_pass,
    #input_fullname {
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
    afterRender() {
        $('#formRegister').addEventListener('submit', async function (e) {
            e.preventDefault();
            try {
                const { data } = await register_user({
                    full_name: $("#input_fullname").value,
                    name: $("#input_name").value,
                    password: $("#input_pass").value,
                    role: 1,
                    avt: "df_avt.png",
                    email: $("#email").value,
                    age: $("#age").value
                })
                if (confirm("Chuyển tới trang đăng nhập ?")) {
                    window.location.href = "/login"
                }
            }
            catch (error) {
                alert(error.response.data);
            }

        })
    }
}


export default register