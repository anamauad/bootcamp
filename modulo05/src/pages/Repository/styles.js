import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 0;
  margin-top: 30px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
    margin-right: 15px;
  }

  div {
    flex: 1;

    strong {
      font-size: 16px;

      a {
        color: #7159c1;
        text-decoration: none;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssuesFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const FilterButton = styled.button.attrs(props => ({
  disabled: props.selected,
}))`
  background: #7159c1;
  color: #fff;
  border: 0;
  padding: 5px 15px;
  border-radius: 4px;
  margin: 0 5px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  &[disabled] {
    opacity: 1;
    cursor: not-allowed;
  }
`;
