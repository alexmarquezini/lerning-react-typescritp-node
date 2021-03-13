import React, { FC, useState } from "react";

interface DisplayTextProps {
  getUserFullName: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullName }) => {
  const [txt, setTxt] = useState("");
  const [msg, setMsg] = useState("");
  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };
  const onClickShowMsg = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setMsg(`Welcome to react testing, ${await getUserFullName(txt)}`);
  };
  return (
    <form>
      <div>
        <label>Enter your name</label>
      </div>
      <div>
        <input data-testid="user-input" value={txt} onChange={onChangeTxt} />
      </div>
      <div>
        <button data-testid="input-submit" onClick={onClickShowMsg}>
          Show Message
        </button>
      </div>
      <div>
        <label data-testid="final-msg">{msg}</label>
      </div>
    </form>
  );
};

export default DisplayText;
