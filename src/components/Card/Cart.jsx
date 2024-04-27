import { IoClose } from "react-icons/io5";
import { useCart } from "../../hooks/useCart";
import imgRoupa from "../../assets/roupa1.png";
import { useSelector, useDispatch } from "react-redux";

export const Cart = () => {
    const { handleIsOpenCart } = useCart();

    // const dispatch = useDispatch();

    // const {cartItems} = useSelector((state) => state.cartReducer)


    return (
        <>
            <div className="w-50r flex flex-col gap-1 right-0 p-4 top-0 h-screen z-20 fixed shadow-xl bg-white">

                <div className="w-full h-10/10 flex items-center justify-between px-10">
                    <h2 className="font-bold text-5xl">Cart</h2>
                    <IoClose className="w-12 h-12 cursor-pointer active:text-c8815f" onClick={handleIsOpenCart} />
                </div>

                <table className="h-4/5 w-full flex flex-col border-b-2">

                    <thead className="h-10/10 w-full flex flex-col items-center gap-3">
                        <tr className="flex justify-evenly w-full">
                            <th></th>
                            <th></th>
                            <th className="">PRODUCT</th>
                            <th className="">PRICE</th>
                            <th className="">QUANTITY</th>
                            <th className="">SUBTOTAL</th>
                        </tr>
                        <span className="h-0.5 bg-e5e7eb w-full"></span>
                    </thead>

                    <tbody className="flex flex-col gap-4 overflow-y-auto h-4/5">

                        <ProductOnCart />
                        <ProductOnCart />
                        <ProductOnCart />
                        <ProductOnCart />
                        <ProductOnCart />

                    </tbody>

                </table>

                <div className="w-full flex justify-end h-10">
                    <button className="h-full w-36 bg-111 text-white">PAYMENT</button>
                </div>


            </div>
            <div className="w-full h-full fixed top-0 z-10 bg-111 bg-opacity-60 line"></div>
        </>
    )
}

const ProductOnCart = () => {
    return (
        <tr className="flex items-center justify-evenly w-full min-h-40 border-b-2 border-e5e7eb">
            <th className="w-6 flex items-center justify-center h-full">
                <IoClose className="w-6 h-6 cursor-pointer" />
            </th>

            <th className="w-15/15 flex items-center justify-left h-full">
                <img src={imgRoupa} alt="" />
            </th>

            <th className="w-15/15 flex items-center justify-left h-full">Lorem</th>

            <th className="w-15/15 flex items-center justify-left h-full">Lorem</th>

            <th className="w-15/15 flex items-center justify-left h-full">Lorem</th>

            <th className="w-15/15 flex items-center justify-left h-full">
                <input type="" />
            </th>
        </tr>
    )
}