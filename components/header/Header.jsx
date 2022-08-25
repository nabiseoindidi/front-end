import Button from "../button/button";
import Link from "next/dist/client/link";
const Header = () => {
  return (
    <header className=" bg-secondary  py-2">
      <div className="mx-auto max-w-6xl flex items-center justify-between  px-4 ">
        <h1>유저명</h1>
        <div className="flex flex-row justify-evenly w-56">
          <Link href="/mypage" passHref>
            <Button title="마이페이지" />
          </Link>
          <Button title="로그인" />
        </div>
      </div>
    </header>
  );
};

export default Header;
