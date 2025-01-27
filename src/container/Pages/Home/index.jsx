import "./index.css";
import MaskedElement from "../../components/MaskedElement";

export default function Home() {

  const words = ["Making", "the", "web", "for", "Future"];
  const newWords = ["Fixing", "the", "mistakes", "of", "past"];

  return (
    <>
      <MaskedElement>
        <div className="flex flex-col items-center justify-center">
          {newWords.map((word, index) => (
            <p
              key={index}
              className={`text-8xl uppercase font-semibold font-poppins`}
            >
              {word}
            </p>
          ))}
        </div>
      </MaskedElement>

      <div className="min-h-screen flex flex-col items-center justify-center">
        {words.map((word, index) => (
          <p
            key={index}
            className={`text-8xl uppercase font-semibold font-poppins ${
              index === 1 || index === 2 ? "text-primary" : "!text-text"
            }`}
          >
            {word}
          </p>
        ))}
      </div>
    </>
  );
}
