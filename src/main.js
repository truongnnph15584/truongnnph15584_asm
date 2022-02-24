import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import login from "./pages/login";
import register from "./pages/register";
import games from "./pages/products";
import product_detail from "./pages/product_detail";
import home from "./pages/home";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import dashboard from "./pages/admin/dashboard";
import AdminProducts from "./pages/admin/products";
import EditProducts from "./pages/admin/products/edit";
import AddProducts from "./pages/admin/products/add";
import { reRender } from "./utils/rerender";
import AdminCategories from "./pages/admin/categories";
import AddCategory from "./pages/admin/categories/add";
import EditCategory from "./pages/admin/categories/edit";
import Adminorders from "./pages/admin/orders";
const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
  document.getElementById("header").innerHTML =  Header.render();
  document.getElementById("content").innerHTML = await content.render(id);
  // document.getElementById("footer").innerHTML = Footer.render();
if(Header.afterRender) Header.afterRender()

if(content.afterRender) content.afterRender(id);
};

const pathname = window.location.pathname;

if(localStorage.getItem('user')){
  const userRole = JSON.parse(localStorage.getItem('user')).role;
  if(userRole === 0){
      console.log("admin")
  } else {
     if(pathname.search("admin")>0){
       window.location.href = "/"
     }
  }
}

router.on({
  "/": () => {
    print(home);
  },
  "/login": () => {
    print(login);
  },
  "/register": () => {
    print(register);
  },
  "/products":() => {
    print(games)
  },
  "/cart":() => {
    print(Cart)
  },
  "/checkout":() => {
    print(Checkout)
  },
  "/products/:id":({data}) => {
    const {id} = data;
    print(product_detail,id)
  },
  "/admin/dashboard":() => {
    print(dashboard)
  },
  "/admin/products":() => {
    print(AdminProducts)
  },
  "/admin/products/:id/edit":({data}) => {
     const {id} = data;
    print(EditProducts,id)
  },
  "/admin/products/add":() => {
   print(AddProducts)
 },
 "/admin/categories":() => {
  print(AdminCategories)
},
"/admin/categories/add":() => {
  print(AddCategory)
},
"/admin/categories/:id/edit":({data}) => {
  const {id} = data;
 print(EditCategory,id)
},
"/admin/orders":() => {
  print(Adminorders)
},
});

router.resolve();
