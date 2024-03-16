import React from "react";
import MainPage from "./MainPage/MainPage";
import CreateBill from "./CreateBill/CreateBill";


const Home = () => {
    return (
        <div>
         <div>
        <MainPage />
        </div>
        <div>
            <CreateBill />
        </div>
       </div>
    )
}

export default Home