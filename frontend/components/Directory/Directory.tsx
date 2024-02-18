import "./Directory.css";
import { useAuth0 } from "@auth0/auth0-react";
import dot from "../../images/dot.png";
import man from "../../images/man.png";

const TeamCard = ({name,title,pic}:{name:any,title:any,pic:any}) => {
  return (
    <div className="team-card">
      <img src={pic} alt="" />
      <div className="team-card-detail">
        <span>{name}</span>
        <span style={{color:"grey"}}>{title}</span>
      </div>
    </div>
  );
};

const Directory = () => {
  const { logout } = useAuth0();

  return (
    <div className="directory">
      <div className="directory-menu">
        <span>Directory</span>
        <span>
          <img src={dot} alt="" />
        </span>
      </div>
      <div className="team-member">
        <span>Team Members</span>
        <div>
          <TeamCard name="Naman Singh" title="Market Development Manager" pic="http://res.cloudinary.com/dj4wtybdg/image/upload/v1708236416/cuqtd4riesfrbbar4sxv.png"/>
          <TeamCard name="Benny Spanbauer" title="Area Sales Manager" pic="http://res.cloudinary.com/dj4wtybdg/image/upload/v1708236308/wp2375dopxamiq5rzsts.png"/>
          <TeamCard name="Jamel Eusebio" title="Administrator" pic="http://res.cloudinary.com/dj4wtybdg/image/upload/v1708238433/thynwfmxna8nayvo4vrs.png"/>
          {/* <TeamCard name="Lavern Laboy" title="Account Executive"/>
          <TeamCard name="Naman Singh" title="Market Development Manager"/>
          <TeamCard name="Benny Spanbauer" title="Area Sales Manager"/>
          <TeamCard name="Jamel Eusebio" title="Administrator"/>
          <TeamCard name="Lavern Laboy" title="Account Executive"/> */}
        </div>
      </div>
      <div className="files">
        <span>Files</span>

        <div>
          {/* <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />

          <TeamCard /> */}
        </div>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("avatar");
          localStorage.removeItem("token");
          logout({ logoutParams: { returnTo: window.location.origin } });
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Directory;
