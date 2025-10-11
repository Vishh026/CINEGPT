import { useSelector } from "react-redux";
import lang from "../utils/LangConstants"

const GptSearchbar = () => {
  const langKey = useSelector(store => store.config.lang)
  console.log("lang",lang);
  
  console.log(langKey)
  
  return (
    <div className="flex justify-center items-center">
      <form className="flex gap-2 bg-transparent items-center">
        <input
          type="text"
          className="w-[30vw] min-w-[250px] px-4 py-2 bg-zinc-100 text-zinc-700 outline-none rounded"
          placeholder={lang[langKey].gptPlaceHolder}
        />
        <button className="px-4 py-2 bg-red-700 rounded text-white hover:bg-red-800 transition">
          {lang[langKey].search}
          
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
