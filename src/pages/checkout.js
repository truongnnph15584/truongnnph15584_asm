// import axios from "axios";

const Checkout = {
    async render() {

        let list_cart = JSON.parse(localStorage.getItem('cart'));
        return /* html */`

        <body>
        <div class="model">
            <div class="room">
                <div class="text-cover">
                    <h1></h1>
                </div>
            </div>
            <div class="payment">
                <div class="receipt-box">
                    <h3>Reciept Summary</h3>
                    <table class="table">

                        <tr>
                            <td>Subtotal</td>
                            <td>VND</td>
                        </tr>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>VND</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="payment-info">
                    <h3>Payment Info</h3>
                    <form action="<?= BASE_URL ?>orders" method="POST">
                        <label>Enter Your Phone Number</label>
                        <input type="text" name="phone" autocomplete="off" value="" placeholder="Phone">
                        <label>Enter Your Address</label>
                        <input type="text" name="address" autocomplete="off" value="" placeholder="Address">
                        <br><br>
                        <input class="btn" type="submit" value="Book Securly">
                    </form>
                </div>
            </div>
        </div>
    </body>
    
    <style>
        * {
            box-sizing: border-box;
            font-family: 'Open Sans', sans-serif;
            font-size: 18px;
            /*   border: 1px solid black; */
            margin: 0;
            padding: 0;
        }
    
        body {

            position: relative;
            min-height: 100vh;
            background-image: url(http://localhost/php2/truongnnph15584_asm/public/upload/img/background-lg_rg.jpg);
        }
    
        label {
            display: block;
        }
    
        /* Model Container */
    
        .model {
            width: 900px;
            height: 700px;
            background: white;
            /*   font-size: 0; */
            position: absolute;
            left:20%;
            
            color: white;
            /*   animation: slideInFromLeft 1s cubic-bezier(0.68, -0.55, 0.265, 1.55); */
            animation-fill-mode: forwards;
        }

    
        .room {
            width: 40%;
            height: 100%;
            background: url(http://localhost/php2/truongnnph15584_asm/public/upload/img/register-left.jpg) no-repeat center center;
            background-size: cover;
            display: inline-block;
            vertical-align: top;
            position: relative;
        }
    
        .text-cover {
            position: absolute;
            bottom: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.7);
            padding: 20px
        }
    
        .text-cover>* {
            margin: 10px 0;
        }
    
        .text-cover h1 {
            font-size: 1.8rem;
        }
    
        .text-cover .price {
            color: #e67e22;
        }
    
        .text-cover .price span {
            font-size: 1.4rem;
            font-weight: 700;
        }
    
        .payment {
            width: 60%;
            height: 100%;
            color: #34495e;
            position: absolute;
            top: 0%;
            right: 0%;
        }
    
        .receipt-box {
            padding: 20px 20px;
            border-bottom: 1px solid #34495e;
        }
    
        .receipt-box h3,
        .payment-info h3 {
            margin-bottom: 2rem;
        }
    
        .payment-info {
            padding: 20px;
        }
        .payment-info input{
            outline: none;
        }
    
    
        input[type=text] {
            width: 100%;
            padding: 8px 10px 10px;
            margin: 15px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            cursor: pointer;
        }
    
        .btn {
            padding: 15px 25px;
            border: none;
            color: white;
            width: 100%;
            display: block;
            background: #9b59b6;
            text-transform: uppercase;
            cursor: pointer;
        }
    
        .table {
            width: 100%;
            max-width: 100%;
            margin-bottom: 1rem;
            background-color: transparent;
        }
    
        .table td {
            font-size: 0.8rem;
            font-style: italic;
            padding: .25rem;
            vertical-align: top;
    
        }
    
    
        .table td:nth-child(2) {
            text-align: right;
        }
    </style>
    `;
    },
    afterRender() {

    }
}


export default Checkout
