
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../sass/main.scss';
import { Carousel } from 'antd';
import Button from "../components/button";


function  Weclome(){
    return (
        <div className="Welcome-Container">
            <Header/>
            <Carousel autoplay={true} autoplaySpeed={3000}>
            <div className="bgImage">
                
                <img src= 'https://images.pexels.com/photos/21627/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'alt="imageo" />
                <p>Phone mugihe cyo kwiga</p>
                <Button name="Read-more" backgrounds="red" textcolor="white"></Button>
            </div>
            <div className="bgImage">
                <img src= 'https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600'alt="imag" />
                <p>Phone mugihe cyo kwiga</p>
                <Button name="Read-more" backgrounds="red" textcolor="white"></Button>
            </div>
            <div className="bgImage">
                <img src= 'https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg?auto=compress&cs=tinysrgb&w=600'alt="imagt" />
                <p>Phone mugihe cyo kwiga</p>
                <Button name="Read-more" backgrounds="red" textcolor="white"></Button>
            </div>
            <div className="bgImage">
                <img src= 'https://images.pexels.com/photos/1809342/pexels-photo-1809342.jpeg?auto=compress&cs=tinysrgb&w=600'alt="imagee" />
                <p>Phone mugihe cyo kwiga</p>
                <Button name="Read-more" backgrounds="red" textcolor="white"></Button>
            </div>
            </Carousel>
            <Footer/>
        </div>
    );
}
export default Weclome;