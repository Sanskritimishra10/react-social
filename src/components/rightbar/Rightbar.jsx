import "./rightbar.css"
import {Users} from '../../dummydata'
import Online from "../online/Online"
export default function rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
          <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            {" "}
           <b className="boldright"> Drake Remoray </b> and three other friends have <b> birthday Today!</b>
          </span>
        </div>
        <img className="adbarRightImg" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendlist">
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
        </ul>
      </>
    )
  };
  const ProfileRightbar=()=>{
    return (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City:</span>
          <span className="rightbarInfoValue">New york</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="righbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="righbarFollwingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="righbarFollwingImg" />
          <span className="rightbarFollowingName">Janell Shrum</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="righbarFollwingImg" />
          <span className="rightbarFollowingName">Alex Durden</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="righbarFollwingImg" />
          <span className="rightbarFollowingName">Dora Hawks</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="righbarFollwingImg" />
          <span className="rightbarFollowingName">Thomas Holden</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="righbarFollwingImg" />
          <span className="rightbarFollowingName">Shirley Beauchamp</span>
        </div>
      </div>
    </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  )
}
