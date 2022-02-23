export const check_login = {
  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    var admin_html = ``;
    if (user == null) {
      return '<span class="absolute top-5 right-5 text-white"><a href="/register">Đăng Ký</a> / <a href="/login">Đăng Nhập</a></span>';
    }
    else {
      if (user.role == 0) {
        admin_html = ` <a class="text-black" href="/admin/dashboard">Admin</a>`;
      }
      return `
      
      <div class="user">
      <div class="dropdown">
      <div class="avt_name">
        <img class="rounded-full w-14" src="../../../src/image/avatar/${user.avt}" alt="">      </div>
      <div class="dropdown-content">
        ${admin_html}
          <a href="/cart">Cart <i class="fas fa-shopping-cart"></i></a>
          <span>My order <i class="fas fa-shopping-cart"></i></span>
          <span id="logout">LOG OUT</span>
      </div>
  </div>
       </div>
    
  
<style>
  
.dropdown {
  position: absolute;
  right: 5%;
  top: 7%;
  
}

.avt_name {
  
    cursor: pointer;
}

.dropdown img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 100%;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 170px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 2%;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
}
.dropdown-content span {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}
.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>
  `;
    }
  }
}

