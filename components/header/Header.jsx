import Button from "../button/button";

const Header = () => {
  return (
    <header className=" bg-secondary  py-2">
      <div className="mx-auto max-w-6xl flex items-center justify-between  px-4">
        <h1>유저명</h1>
        <Button title="로그인" />
      </div>
    </header>
  );
};

export default Header;
