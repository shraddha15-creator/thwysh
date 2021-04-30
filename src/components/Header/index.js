import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header className="w-screen">
            <div className="flex bg-gray-200 px-16 py-4 shadow-md justify-between">
            <p className="bg-auto w-20 pt-4">
                <img src="https://media.wysh.app/webassets/icons/navbar/wysh_logo.png" />
                </p>
                <nav className="space-x-10 uppercase text-purple-500  font-bold pt-6">
                    <Link to="/" className="hover:text-red-500 p-2"> Home </Link>
                    <Link to="/search" className="hover:text-red-500"> Search </Link>
                    <Link to="/category" className="hover:text-red-500"> Category </Link>
                    <Link to="/login" className="hover:text-red-500"> Login </Link>
                </nav>
            </div>
        </header>
    )
}