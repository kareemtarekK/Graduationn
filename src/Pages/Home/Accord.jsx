import hero from "./home.module.css";
import FqCard from "../../components/Fq-Card/FqCard.jsx";

export default function Accord() {

  const data = [
    {
      id: 1,
      question: 'How to check a plate number?',
      answer:
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `
    },
    {
      id: 2,
      question: 'How to submit a report?',
      answer:
        `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of `
    },
    {
      id: 3,
      question: 'When will I receive a response?',
      answer:
        `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of `
    },
    {
      id: 4,
      question: 'Can I submit documents as  evidence?',
      answer:
        `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of `
    },
  ];

  return (
    <section className={hero.acc_cont}>

      <h3 className={hero.sec_title}>F&Q</h3>

      <div className={hero.wrapper}>

        {data.map((item) => (

          <FqCard key={item.id} data={item} />

        ))}

      </div>

    </section>

  );
}
