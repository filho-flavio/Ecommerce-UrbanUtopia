import { FaBagShopping } from "react-icons/fa6";
import { useCart } from "../../hooks/useCart";

function Header() {
    const { handleIsOpenCart } = useCart();

    return (
        <>
            <div className="background w-full h-screen max-w-full bg-no-repeat bg-cover">
                <header className="h-16 flex gap-2 justify-around items-center text-center w-full top-0 right-0 z-10 fixed transition-all duration-350 ease-in-out bg-white bg-opacity-10">
                    <div className="font-medium text-base">
                        <h1 className="font-bold text-xl">UrbanUtopia</h1>
                    </div>

                    <div className="cabeçalho-link flex gap-12">
                        <li>
                            <a className="text-black font-bold hover:text-c8815f" href="#">Inicio</a>
                        </li>
                        <li>
                            <a className="text-black font-bold hover:text-c8815f" href="#">Destaque</a>
                        </li>
                        <li>
                            <a className="text-black font-bold hover:text-c8815f" href="#products">Products</a>
                        </li>
                        <li>
                            <a className="text-black font-bold hover:text-c8815f" href="#contact">Contato</a>
                        </li>
                    </div>

                    <div className="hover:text-c8815f text-4xl cursor-pointer">
                        <FaBagShopping name="bag-outline" onClick={handleIsOpenCart} />
                    </div>

                </header>

                <div className="text-left py-40 p-5 leading-40 h-full">
                    <h1 className="text-8xl font-semibold">NOVOS MODELOS</h1>
                    <h1 className="text-8xl font-semibold">PARA HOMENS</h1>
                    <p>Novas cores, agora também disponível no tamanho dos homens</p>
                    <button className="h-12 cursor-pointer bg-c8815f px-12 rounded-md text-white text-lg transition duration-300 hover:bg-111 hover:scale-105">Nova coleção</button>
                </div>
            </div>
        </>
    )
}

export default Header;