import axios from "axios";
import { useState } from "react";
import { DeleteStyled } from "./style";

const DeletePage = () => {
  const [idx, setIdx] = useState();

  const onDeleteHandler = () => {
    axios
      .delete(`https://dev--website.herokuapp.com/${idx}`, {
        params: {
          idx: idx,
        },
      })
      .then(function (response) {
        // handle success
        console.log(response);
        alert("삭제 완료");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert("err");
      });
  };

  return (
    <DeleteStyled>
      <div>
        <input type={"text"} placeholder="학번" onChange={(e) => setIdx(e.target.value)} />
        <p onClick={onDeleteHandler}>삭제</p>
      </div>
    </DeleteStyled>
  );
};
export default DeletePage;
