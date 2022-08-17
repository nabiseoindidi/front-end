import Button from "../components/button/button";
import MainContainer from "../container/mainContainer/mainContainer";
import Link from "next/dist/client/link";

const BTN = [
  { title: "NORMAL MODE", type: "mode" },
  { title: "SUPER DUPER", type: "mode" },
];
const Level = () => {
  return (
    <MainContainer>
      <section className="flex flex-col items-center ">
        <h1 className=" text-4xl font-bold py-2">레벨을 골라주세요</h1>
        <p>각 레벨에 대한 설명을 보여주고 이동하도록</p>
      </section>
      <section className="flex justify-around items-center w-80">
        {BTN.map((items) => {
          const { title, type } = items;
          return <Button title={title} key={title} type={type} />;
        })}
      </section>
      <section className="flex justify-center items-center py-3">
        <Link href="/quiz" passHref>
          <Button title="문제로 이동하기 👉" />
        </Link>
      </section>
    </MainContainer>
  );
};

export default Level;
