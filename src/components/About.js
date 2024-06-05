import styled from "styled-components";
import blueStar from "../images/frame-star-blue.png";

const About = ({ title, info }) => {
    return(<DivBlock>
            <BorderImg className="top">&nbsp;</BorderImg>
            <Wrapper>
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
            </Wrapper>
          <BorderImg className="bottom">&nbsp;</BorderImg>
    </DivBlock>
    )
}

export default About;

const DivBlock = styled.div`
    position: relative;=
`;

const Wrapper = styled.div`
  width: 100vw;
  padding: 100px 8rem;
  background: #1610F5;
  margin: 0;
  display: flex;
  position: relative;
  color: white;
  overflow-x: hidden;
  overflow-y: hidden;
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
    height: 50px;
    background: url('${blueStar}');
    background-size: cover;
    z-index: 5000;
    &.top {
        top: -25px;
    }
    &.bottom {
        bottom: -25px;
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