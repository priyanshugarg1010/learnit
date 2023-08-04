import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import userEmailState from "../store/selectors/userEmail";

const Landing = () => {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  return (
    <div className=" flex-1 flex flex-row items-center md:justify-center flex-wrap bg-blue-400 max-h-[800px]">
      <div className="h-auto md:w-1/2">
        <div className="text-center md:m-4 ">
          <h1 className="text-5xl font-bold ml-20 mb-8">
            A place to Learn, Grow <br />
            and Succeed
          </h1>
          {!userEmail ? (
            <Button
              variant="contained"
              className="mt-8 h-12"
              onClick={() => navigate("/signup")}
            >
              Start for free
            </Button>
          ) : (
            <Button
              sx={{ marginRight: 2 }}
              size={"large"}
              variant={"contained"}
              onClick={() => {
                navigate("/courses");
              }}
            >
              Explore
              {/*otherwise courses button*/}
            </Button>
          )}
        </div>
      </div>

      <div className="md:flex-1 flex  items-center justify-center">
        <img
          src="../../newmain.png"
          alt="image of classroom"
          className="w-auto max-h-full  "
        />
      </div>
    </div>
  );
};

export default Landing;
