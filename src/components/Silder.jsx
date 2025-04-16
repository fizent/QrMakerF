import { Link } from "react-router-dom";
import { useState } from "react";

export default function MenuMobile() {  
    const [isVisible, setIsVisible] = useState(true);  

    const closeMenu = () => {  
        setIsVisible(false);  
    };  

    return (  
        <div className={`sider ${isVisible ? "active" : "hidden"}`}>  
            <div className="btn-div">
                <button className="menu_mobile" onClick={closeMenu}>
                    <img className="wid-btn" src="/icons8-close.svg" alt="Close menu" />
                </button>
            </div>
            <div className="text-dashbord">
                <h2 className="color-text-dashbord">Funny Calculator</h2>
                <p className="color-text-dashbord">Mohammad Fazel</p>
                <ul>
                    <li className="color-text-dashbord Link">
                        <Link to="/About">درباره</Link>
                    </li>
                    <li className="color-text-dashbord Link">
                        <Link to="/Setting">تنظیمات</Link>
                    </li>
                    <li className="color-text-dashbord">
                    <a href="https://myket.ir/app/app.vercel.calculator_app_xwy5.twa">
                        <img src="/myket.png" alt="Myket" id="myket" />
                    </a>
                    </li>
                </ul>
                <div>
                    <img className="wid-btn" src="/public/LOGO Fazel.png" alt="" />
                    <img className="wid-btn" src="/public/LOGO Fazel.png" alt="" />
                    <img className="wid-btn" src="/public/LOGO Fazel.png" alt="" />
                    <img className="wid-btn" src="/public/LOGO Fazel.png" alt="" />
                    <img className="wid-btn" src="/public/LOGO Fazel.png" alt="" />
                </div>
            </div>
        </div>  
    );  
}
