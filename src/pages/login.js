import { $ } from "../utils/selector";
import { login_user } from "../api/users";

const login = {
    render() {
        return /* html */`
            <main>
                <form id="formLogin">
                    <div class="title">
                        <h3>LOGIN</h3>
                    </div>
                    <div class="input">
                        <input type="text" value="" name="email_input" required id="input_email" autocomplete="off" placeholder="Email">
                        <br>
                        <input type="password" value="" name="pass_input" id="input_pass" autocomplete="off" placeholder="Password"> <br>
                    </div>
                    <div class="bt">
                        <button id="bt" name="submitLogin" type="submit"><i class="fas fa-arrow-right"></i></button>
                        <br>
                    </div>
                    <div class="create-acc">
                        <span>CAN'T SIGN IN?</span> <br>
                        <a href="/register">CREATE ACCOUNT</a>
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
    height: 610px;
    margin-left: -35%;
}

main form .title {
    margin-left: 10%;
    margin-top: 10%;
    margin-bottom: 15px;
    padding-top:15%;
}

main form .title h3 {
    font-size: 30px;
}

main form .phone-age {
    width: 79%;
    margin-left: 10%;
    display: grid;
    grid-template-columns: 2fr 1fr;
}

main form .phone-age #age {
    margin-left: 10px;
}

main form .input #input_email,
main form .input #input_pass {
    margin-left: 10%;
    margin-top: 8%;
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

main form .create-acc {
    text-align: center;
    font-size: 0.638435832211083rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 800;
    color: #111;
}

main form .create-acc span {
    cursor: pointer;
}

main form .create-acc a {
    margin-top: 10px; 
}

footer {
    position: absolute;
    bottom: -14%;
    left: 50%;
    transform: translate(-50%, -50%);
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


</style>
        `;
    },
    afterRender() {
        $('#formLogin').addEventListener('submit', async function (e) {
            e.preventDefault();
            try {
                const { data } = await login_user({
                    email: $("#input_email").value,
                    password: $("#input_pass").value
                })
                localStorage.setItem('user', JSON.stringify(data.user))
                window.location.href = "/"
            }
            catch (error) {
                alert("Sai email hoặc mật khẩu !")
            }
        })
    }
}


export default login