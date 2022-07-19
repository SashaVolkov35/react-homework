import { useState } from "react";
import styled from "styled-components"
import { colors, margins } from "../../theme/theme";
import logoImage from "../../assets/logo-127.png";
import menuImage from "../../assets/menu-icon.png";

const StyledNav = styled.header`
    border: 4px solid #800080;
    width: 100%;
    height: 4rem;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`;

const Logo = styled.div`
    width: 3rem;
    height: 3rem;
    margin: ${margins.xs};
    background: url(${logoImage}) center/contain no-repeat ${colors.lightViolet};
`;

const BurgerBtn = styled.button`
    width: 3rem;
    height: 3rem;
    margin: ${margins.xs};
    background: url(${menuImage}) center/contain no-repeat ;
`;

// const DropDown = styled.ul`
//     width: 7rem;
//     height: 7rem;
//     background: ${colors.bg};
//     position: absolute;
//     left: 0;
//     top: 4rem;
//     border: 1px solid black;
// `;
const MobileMenu = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 4rem;
    color: white;
    background: #333333;
`;

const Nav = () => {
        const [isOpen, setIsOpen] = useState(false);

    return (
       <StyledNav>
            <BurgerBtn onClick={() => setIsOpen(!isOpen)} />
            {isOpen && <MobileMenu>menu item</MobileMenu>}
            <Logo />
       </StyledNav> 
    );
};

export default Nav