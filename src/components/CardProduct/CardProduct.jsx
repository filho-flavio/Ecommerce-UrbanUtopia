
// eslint-disable-next-line react/prop-types
export const CardProduct = ({ productImg, productName, productPrice }) => {
    return (
        <>
            <div className="card-product h-16r w-16r cursor-pointer bg-f8f4f1 rounded-2xl shadow-md">
                <div className="flex flex-col items-center justify-around h-full">
                    <img className="card-img transition duration-350 w-3/4 h-2/4" src={productImg} alt="" />
                    <h4 className="text-xl text-black font-semibold">{productName}</h4>
                    <p className="text-black text-2xl font-bold">{productPrice}</p>
                    <button className="bg-c8815f h-8 w-36 rounded-full text-white shadow-md active:bg-black">ADD TO CARD</button>
                </div>
            </div>
        </>
    )
}