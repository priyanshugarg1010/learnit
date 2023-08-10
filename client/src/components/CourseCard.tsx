import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import userEmailState from "../store/selectors/userEmail";
import { BASE_URL } from "../../config";

type coursetype = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
};

interface cardtype {
  course: coursetype;
}

function MultiActionAreaCard({ course }: cardtype) {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);

  const handleAddCourse = async (courseId: string) => {
    try {
      await axios.post(`${BASE_URL}/courses/${courseId}`, {
        userEmail,
      });
    } catch (err: unknown) {
      if (typeof err === "string") {
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-345 h-400 m-4 ">
      <Card sx={{ maxWidth: 345, width: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={course.imageLink}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-between">
          <Button size="small" variant="contained" endIcon={<ShareIcon />}>
            Share
          </Button>
          <Button size="small" variant="contained">
            View
          </Button>
          <Button
            size="small"
            variant="contained"
            endIcon={<ShoppingCartIcon />}
            onClick={
              userEmail
                ? () => handleAddCourse(course._id)
                : () => navigate("/signin")
            }
          >
            Purchase
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default MultiActionAreaCard;
