import { CardProduct } from "../CardProduct/CardProduct";
import shortImg from "../../assets/short-1.png";
import shortImg2 from "../../assets/short-2.png"


function Categories() {
    return (
        <>
            <section>
                <h1>PRODUCTS</h1>
                <div className="Container-card-1" id="products">

                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg2} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                </div>

                <div className="Container-card-1">
                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg2} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />
                </div>

                <div className="Container-card-1">
                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg2} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />

                    <CardProduct productImg={shortImg} productName={"SHORT MALE"} productPrice={"R$ 50.99"} />
                </div>
            </section>
        </>
    )
}

export default Categories;