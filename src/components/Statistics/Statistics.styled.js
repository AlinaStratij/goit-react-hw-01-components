import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  text-align: center;
  background-color: rgb(250, 248, 248);
  border-radius: 5px;
  box-shadow: 10px 5px 5px rgb(136, 134, 134);
`;
export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  color: rgb(141, 137, 137);
`;
export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  background-color: white;
  justify-content: center;
  padding: 15px 0 15px 0;
`;
export const StatisticsItem = styled.li`
  background-color: ${props => {
    if (props.label === '.docx') {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    if (props.label === `.pdf`) {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    if (props.label === `.mp3`) {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    if (props.label === `.psd`) {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const SpanLabel = styled.span`
  color: space;
  color: black;
`;
export const SpanPercentage = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: space;
  color: black;
  display: flex;
`;
