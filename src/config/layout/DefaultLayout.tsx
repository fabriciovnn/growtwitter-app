import DefaultLayoutStyled from "../../components/DefaultLayoutStyled";
import ContentStyled from "../../components/home/ContentStyled";
import LeftSideBar from "../../components/home/LeftSideBar";
import RightSideBar from "../../components/home/RightSideBar";

interface DefaultLayoutProps {
  children: React.ReactElement;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DefaultLayoutStyled>
      <LeftSideBar />
      <ContentStyled>{props.children}</ContentStyled>
      <RightSideBar />
    </DefaultLayoutStyled>
  );
}

export default DefaultLayout;
