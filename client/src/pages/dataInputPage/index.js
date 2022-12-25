import { useMemo, useState } from "react";
import { PageDiv, PageMainDiv } from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";

const DataInputPage = () => {
  const params = useParams();
  // eslint-disable-next-line
  const game = params.game;

  const [nameState, setNameState] = useState("none");
  const [numberState, setNumberState] = useState("none");
  const [useridxState, setUseridxState] = useState("none");
  const [data1State, setData1State] = useState(0);
  const [data2State, setData2State] = useState(0);
  const [data3State, setData3State] = useState(0);
  const [getData, setGetData] = useState([]);
  // const [filterData, setFilterData] = useState();
  // eslint-disable-next-line
  const dataGet = useMemo(() => {
    // POST 요청 전송
    //https:dev--website.herokuapp.com/api/get
    axios
      .get("https://dev--website.herokuapp.com/api/get")
      .then((res) => {
        setGetData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line
  }, []);
  // console.log(getData);
  let score;
  const onNextHandler = () => {
    score = data1State >= data2State && data1State >= data3State ? data1State : data2State >= data1State && data2State >= data3State ? data2State : data3State >= data1State && data3State >= data2State ? data3State : 0;
    console.log(score);
    console.log("클릭");
    if (data1State === 0 || data2State === 0 || data3State === 0 || nameState === "none" || numberState === "none" || useridxState === "none") {
      alert("값을 입력해주세요");
    } else {
      if (game === "schoolRun") {
        schoolRun(score);
      } else if (game === "dino") {
        dino(score);
      } else if (game === "stairs") {
        stairs(score);
      }
    }
  };

  // 학번이 동일한게 있으면 put
  // 없으면 post
  const schoolRun = () => {
    const filterData = getData.filter((user) => user.useridx === useridxState);
    console.log(filterData);
    if (filterData.length === 0) {
      axios
        .post("https://dev--website.herokuapp.com/api/post", {
          useridx: `${useridxState}`,
          user_name: `${nameState}`,
          user_phoneNumber: `${numberState}`,
          user_schoolRun_bestScore: Number(score),
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .patch("https://dev--website.herokuapp.com/api/updata/schoolRun", {
          useridx: `${useridxState}`,
          user_schoolRun_bestScore: score,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const dino = () => {
    const filterData = getData.filter((user) => user.useridx === useridxState);
    console.log(filterData);
    if (filterData.length === 0) {
      axios
        .post("https://dev--website.herokuapp.com/api/post", {
          useridx: `${useridxState}`,
          user_name: `${nameState}`,
          user_phoneNumber: `${numberState}`,
          user_dino_bestScore: Number(score),
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .patch("https://dev--website.herokuapp.com/api/updata/dino", {
          useridx: `${useridxState}`,
          user_dino_bestScore: score,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const stairs = () => {
    const filterData = getData.filter((user) => user.useridx === useridxState);
    console.log(filterData);
    if (filterData.length === 0) {
      axios
        .post("https://dev--website.herokuapp.com/api/post", {
          useridx: `${useridxState}`,
          user_name: `${nameState}`,
          user_phoneNumber: `${numberState}`,
          user_stairs_bestScore: Number(score),
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .patch("https://dev--website.herokuapp.com/api/updata/stairs", {
          useridx: `${useridxState}`,
          user_stairs_bestScore: score,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <PageMainDiv>
      <PageDiv>
        <div>
          <span>이름</span>
          <input type="text" name="user_name" onChange={(e) => setNameState(e.target.value)} />
        </div>
        <div>
          <span>번호</span>
          <input type="text" name="user_phoneNumber" placeholder="띄어쓰기 없이 입력" onChange={(e) => setNumberState(e.target.value)} />
        </div>
        <div>
          <span>학번</span>
          <input type="text" name="useridx" onChange={(e) => setUseridxState(e.target.value)} />
        </div>
        <p>점수입력</p>
        <div>
          <span>1차</span>
          <input type="text" name="data1" placeholder="숫자만 입력" onChange={(e) => setData1State(e.target.value)} />
        </div>
        <div>
          <span>2차</span>
          <input type="text" name="data2" onChange={(e) => setData2State(e.target.value)} />
        </div>
        <div>
          <span>3차</span>
          <input type="text" name="data3" onChange={(e) => setData3State(e.target.value)} />
        </div>
        <div>
          <span onClick={onNextHandler}>저장</span>
        </div>
      </PageDiv>
    </PageMainDiv>
  );
};
export default DataInputPage;
