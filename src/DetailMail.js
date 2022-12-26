import styled from "styled-components";

function DetailMail(props) {
  const { activeTabDetail } = props;
  console.log("EMAIL DETAIL: ", activeTabDetail)
  const emailFrom = activeTabDetail.from_email.split("<")[1].slice(0, -1);
  const from = activeTabDetail.from_email.split("<")[0].slice(0, -1);
  
  const content = activeTabDetail.content.replace(/\r\n/g, "<br>");
  return (
    <Container>
      <div className="title">{activeTabDetail.subject}</div>
      <div className="identify">
        <div className="name">{from}</div>
        <div className="email">{emailFrom}</div>
      </div>
      <div className="receive">To me</div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="content_email"
      >
        {/* <div  /> */}
      </div>
    </Container>
  );
}
const Container = styled.div`
  padding: 20px;
  .title {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .identify {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    .name {
      font-weight: 500;
      line-height: 16px;
      margin-right: 5px;
    }

    .email {
      font-size: 14px;
      line-height: 14px;
      color: #5e5e5e;
    }
  }

  .receive {
    border-bottom: 1px solid;
    font-size: 14px;
    line-height: 14px;
    color: #5e5e5e;
    padding-bottom: 10px;
  }

  .content_email {
    padding-top: 10px;
    height: 460px;
    overflow-y: scroll;
  }

  .content_email::-webkit-scrollbar {
    width: 0;
  }
`;
export default DetailMail;
