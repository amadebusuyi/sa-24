import styled from "styled-components";
import arrowLight from "../images/frame-arrow-light.png";
// import spark from "../images/ellipse.png";
import { useEffect, useState } from "react";

const Testimonials = (props) => {
    const [testimonies, setTestimonies] = useState([]);
    useEffect(() => {
        if (props.testimonies) {
            const testimonies = props.testimonies;
            let x = 1000;
            let y = 0;
            while(x > 0) {
                testimonies.push(testimonies[y]);
                x -= 1;
                if (y === props.testimonies.length - 1) y = 0;
                else y += 1;
            }
            setTestimonies(testimonies);
        }
    }, [props.testimonies]);
    return (<>
        <Wrapper>
            <h1>Testimonials</h1>
            <BorderImg className="top">&nbsp;</BorderImg>
            {/* <Ignition>&nbsp;</Ignition> */}
            <Testimonies>
                {testimonies.map((testimony, index) => {
                    return (
                        <Testimony key={index} className={'testimony'}>
                            <Info>{testimony.testimony}</Info>
                            <Author>
                                <img src={testimony.img} alt="" />
                                <div>
                                    <h5>{testimony.name}</h5>
                                    <p>{testimony.course}</p>
                                </div>
                            </Author>
                        </Testimony>
                    )
                })}
            </Testimonies>
        </Wrapper>
    </>);
};

export default Testimonials;

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  background: #000;
  margin: 0;
  display: flex;
  position: relative;
  color: white;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    margin: 50px 0;
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
  }
`;

const BorderImg = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    background: url('${arrowLight}');
    &.top {
        top: 20px;
    }
`;

// const Ignition = styled.div`
//     position: absolute;
//     background: linear-gradient(#FFB20050, #000);
//     width: 30vw;
//     height: 30vw;
//     border-radius: 50%;
//     left: 50%;
//     transform: translateX(-50%);
// `;

const Testimonies = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-direction: row;
    min-width: 300vw;
    animation: scroll-left 100s linear infinite;
    @keyframes scroll-left {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-100%);
        }
    }
  }
`;

const Testimony = styled.div`
    min-width: 30vw;
    margin: 50px;
    display: flex;
    padding: 30px;
    position: relative;
    flex-direction: column;
    border: 2px solid rgba(255, 178, 0, 0.12);
    border-radius: 25px;
    background: rgba(255, 178, 0, 0.08);
    :hover {
        cursor: pointer;
        animation-play-state: paused;
    }
    @media (max-width: 768px) {
        min-width: 80vw;
        margin: 10px;
    }
`;

const Info = styled.p`
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 50px;
`;

const Author = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    position: absolute;
    bottom: 0px;
    img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        margin-right: 10px;
        background: white;
    }
    h5 {
        color: white;
        font-family: 'Monument Extended';
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p {
        font-size: 8px;
        color: rgba(255, 255, 255, 0.8);
    }
`;