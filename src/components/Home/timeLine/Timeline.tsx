import { useState } from "react";
import "./Timeline.css";
interface Props {
  data: {
    title: string;
    date: string;
    description: string;
    "data-date": string;
  }[];
}

const TimeLineComponent = ({ data }: Props) => {
  const dateDate = data.map((exp) => exp["data-date"]);
  const [selectedDate, setSelectedDate] = useState(dateDate[0]);

  const toCapitalize: (str: string) => string = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleDateClick: (clickedDate: string) => void = (clickedDate) => {
    setSelectedDate(clickedDate);
  };

  return (
    <div className="mt-[60px] mx-auto flex items-center justify-center flex-col">
      <ol
        className="w-full sm:w-[70%] flex items-center justify-between text-primary"
        id="selector-time-line"
      >
        {dateDate.map((exp, index) => (
          <li
            key={index}
            className={`${exp === selectedDate && "time-line-active"} cursor-pointer`}
            data-date={exp}
            onClick={() => handleDateClick(exp)}
          >
            {toCapitalize(exp)}
          </li>
        ))}
      </ol>
      <span
        className="filling-line h-[2px] bg-main w-full mx-auto mt-2 mb-2"
        aria-hidden="true"
      ></span>
      <div className="flex justify-center flex-col items-center mt-[40px] w-full xl:max-w-[1280px]">
        <ol id="selector-content">
          {data.map((exp, index) => (
            <li
              key={index}
              className={`list ${exp["data-date"] === selectedDate ? "selected fadeIn" : "hidden"} text-center`}
              data-date={exp["data-date"]}
            >
              <h2 className="text-gradient font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%]">
                {exp.title}
              </h2>
              <p className="text-primary mt-4 mb-4 font-bold">{exp.date}</p>
              <p className="mt-4">{exp.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TimeLineComponent;
