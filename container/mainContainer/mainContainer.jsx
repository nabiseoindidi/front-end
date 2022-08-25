import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
const MainContainer = ({ children }) => {
  return (
    <>
      <Header />
      <main className=" flex  flex-col items-center justify-center max-w-6xl mx-auto py-10  ">{children}</main>
    </>
  );
};

export default MainContainer;
