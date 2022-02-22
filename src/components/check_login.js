export const check_login = {
  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    var admin_html = ``;
    if (user == null) {
      return '<span class="absolute top-5 right-5 text-white"><a href="/register">Đăng Ký</a> / <a href="/login">Đăng Nhập</a></span>';
    }
    else {
      if (user.role == 0) {
        admin_html = ` <li><a class="text-black" href="/admin/dashboard">Admin</a></li>`;
      }
      return `<div class="user absolute top-10 right-10 text-white">
          <img class="rounded-full w-14" src="../../../src/image/avatar/${user.avt}" alt="">
            <div class="dropdown bg-white text-black">
              <ul>
              ${admin_html}
              <li><a class="text-black" href="">Account</a></li>
                <li><a class="text-black" href="/cart">Cart</a></li>
                <li id="logout">Logout</li>
              </ul>
            </div>
        </div>`;
    }
  }
}
