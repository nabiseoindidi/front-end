import Button from "../components/button/button";
import Link from "next/link";
import MainContainer from "../container/mainContainer/mainContainer";

const BTN = ["NORMAL MODE", "SUPER DUPER"];
const Home = () => {
  return (
    <MainContainer>
      <section className="flex flex-col items-center py-10">
        <h1 className=" text-4xl font-bold py-2">어서오세요🖐</h1>
        <p>인터뷰를 위한 면접 문제은행입니다</p>
      </section>
      <section className="flex justify-around items-center w-80">
        <p>간단 설명 프로젝트 목표나 사용방법</p>
      </section>
      <section className="flex justify-center items-center py-3">
        <Link href="/level" passHref>
          <Button title="레벨선택으로 이동하기 👉" />
        </Link>
      </section>
    </MainContainer>
  );
};

export default Home;
