import { Link } from "react-router-dom";
import { useState } from "react";
import homestyles from "./home.module.css";
import droparrow from "../icons/dropDownArrow.svg";
import translate from "../icons/translate.svg";
import whiteSideArrow from "../icons/whiteSideArrow.svg";
import greySideArrow from "../icons/greySideArrow.svg";
import logo from "../images/logo.png";
import bannerimg from "../images/BannerImage.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Chatbot } from "../components/Chatbot";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div class={homestyles.MainPage}>
      <div class={homestyles.NavigationBar}>
        <img class={homestyles.image1} src={logo} alt="turners logo"></img>
        <span class={homestyles.SignIn}>Sign In</span>
        <span class={homestyles.Register}>Register</span>
        <img
          class={homestyles.Vector1}
          src={translate}
          alt="translate to chinese"
        ></img>
      </div>

      <div class={homestyles.Frame88}>
        <span class={homestyles.HowtoBuy}>How to Buy</span>
        <div>
          <img
            class={homestyles.Vector}
            src={droparrow}
            alt="drop down arrow"
          ></img>
        </div>
        <span class={homestyles.SellyourCar}>Sell your Car</span>
        <div>
          <img
            class={homestyles.Vector}
            src={droparrow}
            alt="drop down arrow"
          ></img>
        </div>
        <span class={homestyles.CarInsurance}>Car Insurance</span>
        <div>
          <img
            class={homestyles.Vector}
            src={droparrow}
            alt="drop down arrow"
          ></img>
        </div>
        <span class={homestyles.Finance}>Finance</span>
        <div>
          <img
            class={homestyles.Vector}
            src={droparrow}
            alt="drop down arrow"
          ></img>
        </div>
        <span class={homestyles.Subscription}>Subscription</span>
        <div>
          <img
            class={homestyles.Vector}
            src={droparrow}
            alt="drop down arrow"
          ></img>
        </div>
        <div class={homestyles.Frame33}>
          <div class={homestyles.magnifyer}></div>
          <span class={homestyles.Search}>Search</span>
        </div>
      </div>
      <div>
        <img class={homestyles.Frame131} src={bannerimg}></img>
        <span class={homestyles.Protectyouandyourlovedones}>
          Protect you and your loved ones
        </span>
        <Link
          className="quoteLink"
          style={{ textDecoration: "none" }}
          to="/quote"
        >
          <div class={homestyles.GetaQuote}>
            <span class={homestyles.GetaQuote2}>Get a Quote</span>
            <img class={homestyles.Vector3} src={whiteSideArrow}></img>
          </div>
        </Link>
        <Button
          onClick={handleOpen}
          class={homestyles.RetrieveQuote2}
          
        >
          <div class={homestyles.RetrieveQuote}>
            <span class={homestyles.RetrieveQuote2}>Retrieve Quote</span>
            <img class={homestyles.Vector4} src={greySideArrow}></img>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Retrieve your quote
            </Typography>

            <TextField
              required
              id="outlined-required"
              fullWidth
              label="Required"
              size="small"
              sx={{ m: 1, }}
              defaultValue="Quote Number"
            />
            <TextField
              required
              id="outlined-required"
              fullWidth
              label="Required"
              size="small"
              sx={{ m: 1 }}
              defaultValue="Email Address"
            />
            <Button
            fullWidth
            sx={{ m: 1 }}
            variant="contained" >Retrieve your Quote</Button>
          </Box>
        </Modal>
      </div>

      <div>
        <Chatbot></Chatbot>
      </div>
    </div>
  );
}
