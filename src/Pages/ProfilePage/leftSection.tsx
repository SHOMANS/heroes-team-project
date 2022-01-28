import { useState } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";
import Button from "../../Components/Elements/Buttons";
import Modal from "../../Components/Elements/Modal/Dialog/Modal";
import ModalAction from "../../Components/Elements/Modal/Dialog/ModalAction/ModalAction";
import ModalTitle from "../../Components/Elements/Modal/Dialog/ModalTitle/ModalTitle";
import Typography from "../../Components/Typography";
import { useAppDispatch } from "../../Store/configureStore";
import { userSignOut } from "../../Store/Slices/user";
import { IUser } from "../../Store/Types";
import Avater from "./avater";
import {
  LeftProfile,
  LeftProfileUser,
  LeftProfileUserName,
  LeftProfileUserLinkGroup,
  LeftProfileUserLink,
  Divider,
} from "./profile.style";

interface IProps {
  UserProileData: IUser;
}

const LeftSection = ({ UserProileData }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const Logout = () => {
    dispatch(userSignOut());
    setModalDisplay(false);
    navigate("/");
  };

  const [modalDisplay, setModalDisplay] = useState<boolean>(false);

  return (
    <LeftProfile>
      <LeftProfileUser>
        <Avater
          border={"2px solid #fcdd06"}
          src={
            UserProileData.profileImage.length
              ? UserProileData.profileImage
              : "Assets/profile.png"
          }
          marginRight={"1rem"}
        />
        <LeftProfileUserName>
          <Typography style={{ fontWeight: "bold" }}>
            {UserProileData.firstName} {UserProileData.lastName}
          </Typography>
        </LeftProfileUserName>
      </LeftProfileUser>
      <LeftProfileUserLinkGroup>
        <LeftProfileUserLink to="/profile"> My Details</LeftProfileUserLink>
        <LeftProfileUserLink to="/orders"> My Orders</LeftProfileUserLink>
        {UserProileData.isAdmin ? (
          <>
            <Divider />
            <LeftProfileUserLink to="/admin/users">
              {" "}
              Users Panel
            </LeftProfileUserLink>
            <LeftProfileUserLink to="/admin/products">
              {" "}
              Products Panel
            </LeftProfileUserLink>
            <LeftProfileUserLink to="/admin/product/create">
              {" "}
              Create New Product
            </LeftProfileUserLink>
            <LeftProfileUserLink to="/admin/orders">
              {" "}
              Orders Panel
            </LeftProfileUserLink>
          </>
        ) : (
          <></>
        )}
        <Divider />
        <LeftProfileUserLink as={"p"} onClick={() => setModalDisplay(true)}>
          Logout
        </LeftProfileUserLink>
        {modalDisplay && (
          <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
            <ModalTitle>Are you sure you want to logout?</ModalTitle>
            <ModalAction>
              <Button onClick={Logout} backgroundColor={theme.colors.error}>
                Log out
              </Button>
              <Button
                backgroundColor={theme.colors.primary}
                onClick={() => {
                  setModalDisplay(false);
                }}
              >
                Cancel
              </Button>
            </ModalAction>
          </Modal>
        )}
      </LeftProfileUserLinkGroup>
    </LeftProfile>
  );
};

export default LeftSection;
