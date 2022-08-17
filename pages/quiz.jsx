import Button from "../components/button/button";
import MainContainer from "../container/mainContainer/mainContainer";

const BTN = { title: "다음", type: "next" };
const Quiz = () => {
  return (
    <MainContainer>
      <section className="flex items-center justify-center py-5 relative">
        <section className="flex  items-center justify-evenly p-2 rounded-3xl bg-sky-500  absolute top-0">
          <p>문제번호</p>
          <p>카테고리</p>
        </section>
        <section className="max-w-screen-xl border-solid border-2 border-sky-600    py-5 px-2  mx-2 rounded-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt officia impedit sapiente hic laboriosam,
          dicta eligendi, sequi rerum ut praesentium, aliquam libero non? Fuga quis adipisci cum aliquid earum minima.
        </section>
      </section>
      <section className="flex  items-center px-3">
        <input className=" w-full border-solid border-2  p-2" type="text" placeholder="답변을 입력해주세요" />
      </section>
      <section className="flex  items-center justify-center  py-3">
        <Button title={BTN.title} type={BTN.type} />
      </section>
    </MainContainer>
  );
};

export default Quiz;
