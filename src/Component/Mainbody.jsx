import heroDesktop from "../assets/Images/image-hero-desktop.png";
import heroMobile from "../assets/Images/image-hero-mobile.png";
import clientDatabiz from "../assets/Images/client-databiz.svg";
import clientAudiophile from "../assets/Images/client-audiophile.svg";
import clientMeet from "../assets/Images/client-meet.svg";
import clientMaker from "../assets/Images/client-maker.svg"; 
import "./Mainbody.css"

const Mainbody = () => {
    return (
        <div className="flip">
            <div className="bottomleft">
                <h1>Make <br /> remote work</h1>
                <p id="para">
                    Get your team in sync, no matter your location. <br />
                    Streamline processes, create team rituals, and <br />
                    watch productivity soar. 
                </p>
                <button id="btnbottom">Learn more</button>
                <ul>
                    <li><img src= {clientDatabiz} alt="clientDatabiz" /></li>
                    <li><img src={clientAudiophile} alt="clientAudiophile" /></li>
                    <li><img src={clientMeet} alt="clientMeet" /></li>
                    <li><img src={clientMaker} alt="clientMaker" /></li>
                </ul>
            </div>
            <section className="side">
                <img src={heroDesktop} alt="Desktop" id="desktop" width="20px"/>
                <img src={heroMobile} alt="mobile" id="mobile" />
            </section>
        </div>
    );
};

export default Mainbody;
