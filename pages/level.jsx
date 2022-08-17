import Button from "../components/button/button";
import MainContainer from "../container/mainContainer/mainContainer";
import Link from "next/dist/client/link";

const BTN = ["NORMAL MODE", "SUPER DUPER"];
const Level = () => {
  return (
    <MainContainer>
      <section className="flex flex-col items-center py-10">
        <h1 className=" text-4xl font-bold py-2">레벨을 골라주세요</h1>
        <p>각 레벨에 대한 설명을 보여주고 이동하도록</p>
      </section>
      <section className="flex justify-around items-center w-80">
        {BTN.map((items) => {
          return <Button title={items} key={items} />;
        })}
      </section>
      <section className="flex justify-center items-center py-3">
        <Link href="/quiz" passHref>
          <Button title="👉" />
        </Link>
      </section>
    </MainContainer>
  );
};

export default Level;
