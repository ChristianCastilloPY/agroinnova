/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import Sidebar from "./Sidebar";
import FloatButton from "./Sidebar/FloatButton";
import { useAuth } from "../../context/AuthContext";
import Header from "./Header";
import avatar from "../../assets/img/avatar1.jpeg";
import { requestApi } from "../../services/api";
import { useLoadingRequest } from "../../context/BackdropLoaderContext";
import { adaptedUserLogin } from "../../adapters/userLogin";
import HandleError from "../../hooks/HandleErrors.tsx";
import { IEndpointUserLogin } from "../../models/IUserLogin";
import Footer from "../../views/Footer";

const { VITE_ASSET_URL } = import.meta.env;

const MainWrapper = styled(Box)(
  () => `
        display: flex;
        flex-direction: column;
        height: 100%;


        @media (min-width: 1280px) {
            // padding-left: 280px;
        }
`
);

const MainContent = styled(Box)(
  () => `
        margin-top: 20px;
        flex: 1 1 auto;
        overflow: auto;
`
);

function SidebarLayout() {
  const { userTokens, setDataOfUser } = useAuth();
  const { sidebarToggle } = useSidebar();
  const loadingRequest = useLoadingRequest();

  useEffect(() => {
    if (userTokens.token) {
      loadingRequest.showLoading();
      Promise.all([
        requestApi<{ data: IEndpointUserLogin }>({
          domain: VITE_ASSET_URL,
          method: "GET",
          // path: `/api-hub/v1/auth/users/admin/me`,
        }),
      ])
        .then((response) => {
          const user = {
            ...response[0].data,
            url_image: avatar,
          };
          setDataOfUser(adaptedUserLogin(user));
        })
        .catch((error) => {
          HandleError(error);
          console.log(error);
        })
        .finally(() => {
          loadingRequest.hiddenLoading();
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTokens]);

  return (
    <>
      <Sidebar />
      <MainWrapper className={`sidebar ${sidebarToggle ? "active" : ""}`}>
        <Header />
        <MainContent className="content-container">
          <Outlet />
        </MainContent>
        <FloatButton />
        <Footer />
      </MainWrapper>
    </>
  );
}

export default SidebarLayout;
