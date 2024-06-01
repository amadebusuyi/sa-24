import styled from "styled-components";
import blueStar from "../images/frame-star-blue.png";

const About = ({ title, info }) => {
    return(
      <Wrapper>
          <BorderImg className="top">&nbsp;</BorderImg>
          <Title>
            {title}
          </Title>
          <Info>
            {info.map((p, index) => {
                return(
                    <p key={index}>{p}</p>
                );
            })}
          </Info>
          <BorderImg className="bottom">&nbsp;</BorderImg>
      </Wrapper>
    )
}

export default About;


const Wrapper = styled.div`
  width: 100%;
  padding: 100px 8rem;
  background: #1610F5;
  margin: 0;
  display: flex;
  position: relative;
  color: white;
  flex-direction: row;
  @media (max-width: 768px) {
    padding: 100px 20px;
    flex-direction: column;
  }
  align-items: center;
`;

const BorderImg = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    background: url('${blueStar}');
    &.top {
        top: -20px;
    }
    &.bottom {
        bottom: -15px;
    }
`;

const Title = styled.h1`
    display flex;
    align-items: center;
    font-weight: 800;
    font-size: 3rem;
    color: white;
    margin-right: 10rem;
    @media (max-width: 768px) {
        font-size: 2rem;
        margin-right: 0;
        text-align: center;
        margin-bottom: 50px;
    }
    text-transform: uppercase;
`;

const Info = styled.div`
    display flex;
    align-items: center;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;