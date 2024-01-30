import { InputType } from "@components/Types";
import { v4 as uuidv4 } from 'uuid';

export default function Input({ inputType, type, text, className, placeholder, value }) {
  const defaultTextStyles = "font-base text-white text-opacity-50 uppercase flex flex-col gap-2 font-medium";
  const defaultInputStyles = "w-full border border-enveus-primary bg-enveus-black rounded-lg p-3 text-white";

  const authTextStyles = "font-medium";
  const authInputStyles = "rounded-xl bg-enveus-black py-3 px-6 w-full focus-visible:outline-offset-0";

  const getStyles = () => {
    switch(inputType) {
      case InputType.Auth:
        return {"text": authTextStyles, "input": authInputStyles}
      case InputType.Default:
      default:
        return {"text": defaultTextStyles, "input": defaultInputStyles}
    }
  };

  const idPair = uuidv4();

  return (
    <div className={className}>
      <label htmlFor={idPair} className={getStyles().text}>{text}</label>
      {type !== "textarea" &&
        <input id={idPair} className={getStyles().input} type={type} placeholder={placeholder} defaultValue={value}/>
      }
      {type === "textarea" && 
        <textarea id={idPair} className={getStyles().input} rows="10">{value}</textarea>
      }
    </div>
  )
}
