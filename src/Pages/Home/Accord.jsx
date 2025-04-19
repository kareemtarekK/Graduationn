import hero from "./home.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from 
"react-icons/io";
import {useState} from 'react';


export default function Accord() {
    const [selected,setSelected]=useState(null)

    const toggle = (i) => {
        if (selected === i) {
          return setSelected(null);
        }
        setSelected(i);
      };

  return (
    <>
<div className={hero.wrapper}>
      <div className={hero.accordion}>
        {data.map((item, i) => (
          <div key={i} className={hero.item}>
            <div className={hero.title2} onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {selected === i && (
              <div className={hero.content}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>

  );
}
const data = [
    {
      question: 'How to check a plate number?',
      answer:
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `
    },
    {
      question: 'How to submit a report?',
      answer:
        `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of `
    },
    {
      question: 'When will I receive a response?',
      answer:
        `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of `
    },
    {
      question: 'Can I submit documents as  evidence?',
      answer:
        `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of `
    },
  ];
