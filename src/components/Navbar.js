import styled from "styled-components";
import logo from "../images/logo-3.png";
import menu from "../images/menu.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const pages = [
    // {
    //   name: 'Home',
    //   path: '/',
    // },
    // {
    //   name: 'Courses',
    //   path: '/courses',
    // },
    // {
    //   name: 'Past Cohorts',
    //   path: '/past-cohorts',
    // },
  ];
    return(
      <Wrapper>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {/* <Menu><img src={menu} alt="" /></Menu> */}
          <Navs>
            {/* <i className="nav-links fa fa-bars">Hello</i> */}
            {pages.map((page, index) => {
              return (
                  <NavLink className='nav-links' key={index} to={page.path}>{page.name}</NavLink>
              )
            })}
          </Navs>
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