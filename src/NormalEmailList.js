import styled from "styled-components";

function NormalEmailList(props) {
  const { normalEmailList, handleClickDetail } = props;

  return (
    <Container>
      <div className="normal_list">
        {normalEmailList.map((email, index) => {
          const from = email.from_email.split("<")[0].slice(0, -1);

          return (
            <div
              onClick={() => handleClickDetail(email)}
              key={index}
              className="item"
            >
              <div className="from">{from}</div>
              <div className="content">
                <span>{email.subject}</span> - {email.content}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  .normal_list {
    height: 586px;
    overflow-y: scroll;
  }
  .normal_list::-webkit-scrollbar {
    width: 0;
  }
  .item {
    &:hover {
      background: #ccc;
      cursor: pointer;
    }
    overflow: hidden;
    padding: 10px;
    display: flex;
    /* display: -webkit-box; */
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    border-bottom: 1px solid #ccc;
    .from {
      width: 25%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
      color: #a1a706;
      margin-right: 6px;
    }

    .content {
      width: 74%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      span {
        font-weight: 500;
      }
    }
  }
`;
export default NormalEmailList;
