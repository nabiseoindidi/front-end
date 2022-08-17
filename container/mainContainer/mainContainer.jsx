import Button from "../../components/button/button";
const MainContainer = ({ children }) => {
  return (
    <>
      <header className=" bg-sky-200  py-2">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between  px-4">
          <h1>유저명</h1>
          <Button title="로그인" />
        </div>
      </header>
      <main className=" flex  flex-col items-center justify-center max-w-screen-xl mx-auto py-7">{children}</main>
    </>
  );
};

export default MainContainer;
