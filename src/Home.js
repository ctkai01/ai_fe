import { Button, Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DetailMail from "./DetailMail";
import NormalEmailList from "./NormalEmailList";
import SpamEmailList from "./SpamEmailList";
const SPAM_TAB = 0;
const NORMAL_TAB = 1;

function Home() {
  const [activeTab, setActiveTab] = useState(NORMAL_TAB);
  const [activeTabDetail, setActiveTabDetail] = useState(null);
  const [normalEmailList, setNormalEmailList] = useState([]);
  const [spamEmailList, setSpamEmailList] = useState([]);
  console.log("Normal List", normalEmailList);
  useEffect(() => {
    const listNormal = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/get-normal-email");
        console.log("Logging:", res.data);
        setNormalEmailList(res.data);
      } catch (e) {
        console.log("Error");
        console.log(e);
      }
    };

    const listSpam = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/get-spam-email");
        console.log("Logging:", res.data);
        setSpamEmailList(res.data);
      } catch (e) {
        console.log("Error");
        console.log(e);
      }
    };

    if (activeTab === NORMAL_TAB) {
      listNormal();
    } else {
      listSpam();
    }
  }, [activeTab]);
  const switchNormalTab = () => {
    setActiveTab(NORMAL_TAB);
    setActiveTabDetail(null);
  };

  const switchSpamTab = () => {
    setActiveTab(SPAM_TAB);
    setActiveTabDetail(null);
  };

  const handleClickDetail = (email) => {
    setActiveTabDetail(email);
  };

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  const handleBack = () => {
    setActiveTabDetail(null)
  }

  console.log("Active", activeTabDetail);
  return (
    <Container>
      <Button onClick={handleBack} type="default" className="back_btn">
        Back
      </Button>
      <div
        className="card"
        style={{
          width: 800,
          display: "flex",
          alignContent: "center",
          height: "650px",
          borderRadius: "10px",
          flexDirection: "column",
          border: "1px solid #ccc",
        }}
      >
        <div className="header_tab">
          <Button
            onClick={switchNormalTab}
            className="normal_tab_btn"
            type={activeTab === NORMAL_TAB ? "primary" : "dashed"}
          >
            Normal Email
          </Button>
          <Button
            onClick={switchSpamTab}
            className="spam_tab_btn"
            type={activeTab === SPAM_TAB ? "primary" : "dashed"}
          >
            Switch Email
          </Button>
        </div>
        <div className="content">
          {!activeTabDetail ? (
            activeTab === NORMAL_TAB ? (
              <NormalEmailList
                handleClickDetail={handleClickDetail}
                normalEmailList={normalEmailList}
              />
            ) : (
              <SpamEmailList handleClickDetail={handleClickDetail} spamEmailList={spamEmailList} />
            )
          ) : (
            <DetailMail activeTabDetail={activeTabDetail}/>
          )}
        </div>
      </div>
      <Button onClick={handleLogOut} type="default" className="logout_btn">
        Log out
      </Button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  .logout_btn {
    margin-top: 2px;
    font-weight: 500;
  }

  .spam_tab_btn, .normal_tab_btn {
    font-weight: 500;

  }

  .back_btn {
    font-weight: 500;
  }
  .header_tab {
    padding: 15px 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    border-bottom: 2px solid pink;
    background: green;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    .tab {
      margin-right: 10px;
      border: 1px solid;
      
    }
  }

  .content {
    height: 100%;
  }
`;
export default Home;
