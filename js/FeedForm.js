import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai";
import profile from './images/profile.jpg';

export default function(){
    return (
        <div className="feed">
            <div className="feedForm">
                <img src={profile} />
                <input type="text" placeholder="No que você está pensando?" />
            </div>
            <div className="feedIcons">
                <div className="iconSingle">
                  <AiFillVideoCamera />
                  <span>Video ao vivo</span>
                </div>
                <div className="iconSingle img">
                  <AiOutlineFileImage />
                  <span>Video ao vivo</span>
                </div>
                <div className="iconSingle emoji">
                  <AiOutlineMeh />
                  <span>Video ao vivo</span>
                </div>
            </div>



        </div>
    );
}