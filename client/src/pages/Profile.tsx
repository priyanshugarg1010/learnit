import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";

const Profile = () => {
  return (
    <div className="w-[100%] h-[100%] ml-[100px] mr-[25px]">
      <div>
        <img
          src="https://images.pexels.com/photos/295771/pexels-photo-295771.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-[100%] h-[300px] position-relative object-cover"
        />
        <img
          src="../../me.jpeg"
          alt=""
          className="w-[200px] h-[200px] rounded-[50%] object-cover position-absolute l-0 r-0 m-auto  mt-[-100px]"
        />
      </div>
      <div className="">
        <div className="h-[180px] p-[30px] flex items-center justify-center  ">
          <div className="flex-1 gap-[10px] flex justify-center">
            <a href="http://facebook.com">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://linkedIn.com">
              <LinkedInIcon fontSize="large" />
            </a>

            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="flex flex-1 flex-col justify-around items-center">
            <span>Priyanshu Garg</span>
            <div className="info">
              <div className="mt-[10px]">
                <PlaceIcon />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
