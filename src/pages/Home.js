import { Courosel } from "../components/Courosel"
import { Footer } from "../components/Footer"
import { Profile } from "../components/Profile"

export const Home = () => {
    return (
        <div className=" w-full h-full bg-gray-200 ">
            <Courosel />
            <div className="container mt-6 pl-80 flex flex-row text-white font-bold ">
                
                <div className="w-1/2 hover:bg-purple-600 cursor-pointer bg-purple-400 h-24 mb-4 rounded-lg ">
                     <p className="items-center justify-around flex flex-col">
                        <img className="bg-auto bg-center w-20 ml-20" src="https://media.wysh.app/webassets/icons/video_msgs_h1.png" />
                                celebraty video msg
                     </p>
                </div>
                <div className="w-1/2 hover:bg-purple-600 cursor-pointer bg-purple-400 ml-6 h-24 space-y-4 rounded-lg" >
                    
                    <p className="items-center justify-around flex flex-col"> 
                         <img className="bg-auto bg-center w-20 ml-20" src="https://media.wysh.app/webassets/icons/brand_promo_bg.png" />
                                 custom brand promotion</p>
                </div>
            </div>
                <Profile />
                <Footer />
        </div>
    )
}