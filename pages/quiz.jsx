import Button from "../components/button/button";
import MainContainer from "../container/mainContainer/mainContainer";

const BTN = { title: "다음", type: "next" };
const Quiz = () => {
  return (
    <MainContainer>
      <section className="flex items-center justify-center py-5 relative">
        <section className="flex w-44 items-center justify-evenly p-2 rounded-3xl bg-secondary absolute top-0">
          <p className=" text-base-100">01.</p>
          <p className=" text-base-100">카테고리</p>
        </section>
        <section className="max-w-6xl border-solid border-2 border-secondary   py-5 px-2  mx-2 rounded-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt officia impedit sapiente hic laboriosam,
          dicta eligendi, sequi rerum ut praesentium, aliquam libero non? Fuga quis adipisci cum aliquid earum minima.
        </section>
      </section>
      <section className="flex  items-center justify-center w-full">
        <input className=" w-3/4 border-solid border-2  p-2" type="text" placeholder="답변을 입력해주세요" />
      </section>
      <section className="flex  items-center justify-center  py-3">
        <Button title={BTN.title} type={BTN.type} />
      </section>
    </MainContainer>
  );
};

export default Quiz;
