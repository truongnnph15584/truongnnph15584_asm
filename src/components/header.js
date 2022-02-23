import Nav from "./nav";
import { $ } from "../utils/selector";
import { check_login } from "./check_login";
const Header = {
  render() {
    return `
        <header>
        <div class="relative header bg-slate-900 content-center h-23 ">
        <a href=""><img class="w-44 pt-3 pl-20" src="../../../src/image/logo_banner.png" alt=""></a>
        <div class="bg-slate-900 h-10">
        ${Nav.render()}
        </div>
        </div>
        ${check_login.render()}  
        <div class="overflow-hidden h-96">
        <img class="w-full " src="../../../src/image/bg_banner.jpg" alt="">
          </div>
          </header>
`;
  },
  afterRender() {
    const checklogout = document.getElementsByClassName("user")
    if (checklogout.length > 0) {
      $("#logout").addEventListener('click', function (e) {
        localStorage.removeItem('user');
        window.location.href = "/login"
      })
    }
  }
}
export default Header
