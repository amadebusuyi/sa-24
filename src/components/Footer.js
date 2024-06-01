import styled from "styled-components";
import yellowArrow from "../images/frame-arrow-yellow.png";
import { NavLink } from "react-router-dom";
import logo from "../images/logo-3.png";
import location from "../images/location.png";
import email from "../images/email.png";
import phone from "../images/phone.png";
import instagram from "../images/instagram.png";

const Footer = () => {
    const contact = [
        {
            icon: location,
            text: '12, Efon Alaye close, Off Sule Abore Street, Ojodu Berger, Lagos',
        },
        {
            icon: email,
            text: 'gloryrealmteensmin@gmail.com',
        },
        {
            icon: phone,
            text: '+234 915 410 4675',
        },
        {
            icon: instagram,
            text: '@gloryrealmsteensmin',
        },
    ];
    return(
      <Wrapper>
          <BorderImg className="top">&nbsp;</BorderImg>
          <Title>
            Discover your best self
          </Title>
          <Apply>
            <NavLink className="apply-button-2" to={'https://academy.grtministry.com'} target="_blank">
              <div className="under-layer"></div><span>Apply Now</span></NavLink>
          </Apply>
          <Info>
            <img src={logo} alt="" />
            <p>
                Glory Realms Teens Ministry (GRTM) is the teens ministry of Glory Centre Community Church. We are committed to transforming the lives of young teenagers, sealing them for their God-given destiny.
            </p>
            <h5>Contact Us</h5>
            {contact.map((c, index) => {
                return (<p key={index}>
                    <img src={c.icon} alt="" style={{ marginRight: 20 }} />
                    <span>{c.text}</span>
                </p>)
            })}
          </Info>
      </Wrapper>
    )
}

export default Footer;


const Wrapper = styled.div`
  width: 100%;
  padding: 100px 8rem;
  background: rgba(255, 178, 0, 1);
  margin: 0;
  display: flex;
  position: relative;
  color: white;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const BorderImg = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    background: url('${yellowArrow}');
    &.top {
        top: -20px;
    }
`;

const Title = styled.h1`
    display flex;
    font-weight: 800;
    font-size: 5rem;
    color: white;
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Info = styled.div`
    display flex;
    justify-content: left;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 30px 0;
    margin-top: 20px;
    width: 100%;
    img {
        height: 50px;
    }
    p {
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
        margin-top: 20px;
        letter-spacing: 0.5px;
        img {
            height: 25px;
            width: auto;
        }

        span {
            font-size: 14px;

            @media (max-width: 768px) {
                font-size: 12px;
            }
        }
    }

    h5 {
        font-family: 'Monument Extended';
        color: #fff;
        margin: 30px 0;
    }
`;


const Apply = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  margin: 2.5rem 0;
  .apply-button-2 {
    position: relative;
    margin-top: -10px;
    span {
      display: inline-flex;
      position: relative;
      font-size: 20px;
      font-weight: bold;
      background: white;
      border-radius: 25px;
      padding: 12.5px 20px;
      z-index: 10;
      color: black;
      font-weight: 800;
      border: 2px solid black;
      letter-spacing: 0.05rem;
    }
    .under-layer {
      position: absolute;
      background: red;
      width: 200px;
      height: 55px;
      margin-top: 12.5px;
      margin-left: 7.5px;
      border-radius: 25px;
      border: 2px solid black;
      z-index: 0;
    }
  }
`;