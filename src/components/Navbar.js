import styled from "styled-components";
import logo from "../images/logo-3.png";
import rise from "../images/rise.png";
import sa from "../images/sa.png";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const pages = [
  //   {
  //     name: 'Home',
  //     path: '/',
  //   },
  //   {
  //     name: 'Courses',
  //     path: '/courses',
  //   },
  //   {
  //     name: 'Past Cohorts',
  //     path: '/past-cohorts',
  //   },
  // ];
    return(
      <Wrapper>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="rise">
            <img src={rise} alt="" />
          </div>
          <div className="sa">
            <img src={sa} alt="" />
          </div>
          {/* <Menu><img src={menu} alt="" /></Menu> */}
          {/* <Navs>
            {pages.map((page, index) => {
              return (
                  <NavLink className='nav-links' key={index} to={page.path}>{page.name}</NavLink>
              )
            })}
          </Navs> */}
      </Wrapper>
    )
}

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 8rem;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  .logo {
    height: 50px;
    display: inline-flex;
    position: absolute;
    left: 8rem;
    @media (max-width: 768px) {
      height: 24px;
      left: 20px;
    }
  }
  .sa {
    height: 60px;
    display: inline-flex;
    position: absolute;
    right: 8rem;
    @media (max-width: 768px) {
      height: 30px;
      right: 20px !important;
      justify-content: right;
    }
  }
  .rise {
    height: 100px;
    display: inline-flex;
    position: relative;
    left: 4rem;
    @media screen and (max-width: 768px) {
      position: absolute;
      // justify-content: center;
      left: calc(50% - 40px);
      height: 30px;
      margin-left: 20px;
    }
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

// const Navs = styled.div`
//   display: inline-flex;
//   justify-content: center;
//   position: relative;
//   align-items: center;
//   color: #fff;
//   width: calc(100% - 22.5rem);
//   .nav-links {
//     display: inline-flex;
//     font-size: 16px;
//     margin: 0 20px;
//     font-weight: normal;
//     &:hover, &:active {
//       text-decoration: none;
//     }
//   }
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const Menu = styled.div`
//   position: absolute;
//   right: 20px;
//   img {
//     width: 30px;
//   }
//   @media (min-width: 769px) {
//     display: none;
//   }
// `;