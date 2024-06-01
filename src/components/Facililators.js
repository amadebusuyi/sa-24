import styled from "styled-components";

const Facilitators = ({ title, desc, data = [] }) => {
    return(
      <Wrapper>
        <Header>
            <Title>{title}</Title>
            <Description>{desc}</Description>
        </Header>
        <List>
            {data.map((f, index) => {
                return(
                    <Facilitator key={index}>
                        <img src={f.img} alt="" />
                        <h4>{f.name}</h4>
                        <p>{f.occupation}</p>
                    </Facilitator>
                )
            })}
        </List>
      </Wrapper>
    )
}

export default Facilitators;

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 8rem;
  @media (max-width: 768px) {
    padding: 100px 20px;
  }
  background: #000;
  margin: 0;
  display: flex;
  position: relative;
  color: white;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    justify-content: space-around;
`;

const Title = styled.h1`
    display: flex;
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 100px;
    @media (max-width: 768px) {
        margin-bottom: 50px;
    }
`;

const Description = styled.div`
    display: flex;
`;

const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 80px;
    justify-content: center;
`;

const Facilitator = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.08);
    border: 2px solid rgba(255, 255, 255, 0.12);
    margin: 20px;
    img {
        width: 20vw;
        height: auto;
        border-radius: 10px;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    h4 {
        color: white;
        font-family: 'Monument Extended';
        font-weight: bold;
        font-size: 16px;
        margin-top: 20px;
    }
    p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
    }
`;