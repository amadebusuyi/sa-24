import styled from "styled-components";
import frameArrow from '../images/frame-arrow-light.png'

const CourseCard = ({ data }) => {
    return (<Wrapper color={data.bgColor} >
        {data.effect && (<>
            <img className="effect" src={data.effect} alt="" />
            <img className="effect" src={data.effect} alt="" />
            <img className="effect" src={data.effect} alt="" />
        </>
        )}
        <Title className={data.courses && data.courses.length > 0 ? 'has-list' : 'has-no-list'}>
            {data.title}<br /><span>({data.category})</span>
        </Title>
        {data.courses && (
            <>
                <BorderImg>
                    <img src={frameArrow} alt="" />
                    <img className="inverse" src={frameArrow} alt="" />
                </BorderImg>
                <Lists>
                    {data.courses.map((course, index) => { return (
                        <List key={index}>
                            {course}
                        </List>
                    )})}
                </Lists>
            </>
        )}
    </Wrapper>);
}

export default CourseCard;

const Wrapper = styled.div`
    display: flex;
    background: ${p => p.color || 'blue'};
    width: 320px;
    height: 280px;
    flex-wrap: wrap;
    overflow-x: hidden;
    align-items: center;
    border-radius: 25px;
    padding: 20px;
    margin: 20px;
    text-wrap: wrap;
    position: relative;
    overflow: hidden;
    @media (max-width: 359px) {
        width: calc(100vw - 40px);
        height: auto;
        min-height: 280px;
    }
    box-shadow: 0 2px 10px;
    &:hover {
        transform: scale(0.96)
    }
    .effect {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: 1;
    }
`;

const Title = styled.p`
    display: flex;
    flex-direction: column;
    letter-spacing: 0px;
    color: #fff;
    z-index: 100;
    &.has-list {
        font-family: 'Monument Extended';
        font-size: 1.2rem;
        font-weight: 800;
        span {
            font-size: 0.8rem;
            font-weight: 400;
        }
        @media (max-width: 359px) {
            font-size: 1rem;
            span {
                font-size: 0.6rem;
            }
        }
    }
    &.has-no-list {
        font-size: 2.3rem;
        span {
            font-size: 1.2rem;
        }
        @media (max-width: 359px) {
            font-size: 1.5rem;
            span {
                font-size: 0.8rem;
            }
        }
    }
`;

const Lists = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    margin-top: 0px;
    list-style-type: square;
    z-index: 100;
`;

const List = styled.li`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.9);
    padding: 2.5px;
`;

const BorderImg = styled.div`
    img {
        width: 100%;
        &.inverse {
            position: relative;
            transform: rotate(180deg);
            top: -16px;
        }
    }
    z-index: 100;
`;