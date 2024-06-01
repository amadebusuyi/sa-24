import styled from "styled-components";
import logo from "../images/logo-3.png";
import menu from "../images/menu.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const pages = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Courses',
      path: '/courses',
    },
    {
      name: 'Past Cohorts',
      path: '/past-cohorts',
    },
  ];
    return(
      <Wrapper>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Menu><img src={menu} alt="" /></Menu>
          <Navs>
            {/* <i className="nav-links fa fa-bars">Hello</i> */}
            {pages.map((page, index) => {
              return (
                  <NavLink className='nav-links' key={index} to={page.path}>{page.name}</NavLink>
              )
            })}
          </Navs>
          <Apply>
            <NavLink className="apply-button" to={'https://forms.gle/yfgfXUd3RHqpehSR6'} target="_blank">
              <div className="under-layer"></div><span>Apply Now</span></NavLink>
          </Apply>
      </Wrapper>
    )
}

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 8rem;
  margin: 0;
  display: flex;
  position: relative;
  .logo {
    height: 35px;
    display: inline-flex;
    position: relative;
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Navs = styled.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  align-items: center;
  color: #fff;
  width: calc(100% - 22.5rem);
  .nav-links {
    display: inline-flex;
    font-size: 16px;
    margin: 0 20px;
    font-weight: normal;
    &:hover, &:active {
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  right: 20px;
  img {
    width: 30px;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const Apply = styled.div`
  display: inline-flex;
  position: absolute;
  right: 8rem;
  @media (max-width: 768px) {
    top: 550%;
    right: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .apply-button {
    position: relative;
    margin-top: -10px;
    span {
      display: inline-flex;
      position: relative;
      font-size: 16px;
      font-weight: bold;
      background: white;
      border-radius: 25px;
      padding: 10px 20px;
      z-index: 10;
      color: black;
      font-weight: 800;
      border: 2px solid black;
      letter-spacing: 0.05rem;
    }
    .under-layer {
      position: absolute;
      background: red;
      width: 170px;
      height: 50px;
      margin-top: 6px;
      margin-left: 7.5px;
      border: 2px solid black;
      border-radius: 25px;
      z-index: 0;
    }
  }
`;