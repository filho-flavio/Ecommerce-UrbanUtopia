import { CardProduct } from "../CardProduct/CardProduct";


function NewProducts() {
    return (
        <>
            <section>
                <h1>NEW PRODUCTS</h1>
                <div className="Container-roupas" id="new-products">

                    <CardProduct productImg={"./src/assets/roupa1.png"} productName={"Lorem Ipsum dizgi"} productPrice={"49.30"} />

                    <CardProduct productImg={"./src/assets/roupa2.png"} productName={"Lorem Ipsum dizgi"} productPrice={"49.30"} />

                    <CardProduct productImg={"./src/assets/roupa3.png"} productName={"Lorem Ipsum dizgi"} productPrice={"49.30"} />

                    <CardProduct productImg={"./src/assets/roupa4.png"} productName={"Lorem Ipsum dizgi"} productPrice={"49.30"} />

                </div>
            </section>
        </>
    )
}

export default NewProducts;