import styled from "styled-components"
import { fontSizes, margins } from "../../theme/theme";

const StyledFooter = styled.footer`
    width: 100%;
    height: 6rem;
    bottom: 0;
    text-align: center;
    font-size: ${fontSizes.sm}
`;

const Icons = styled.div`
    width: 8rem;
    height: 2rem;
    margin: ${margins.sm} auto;
    display: flex;
    justify-content: space-between;

  
`;
const Icon = styled.a` // srabotaet kak link i perejdjet na druguju stranicu.
    width: 2rem;
    height: 2rem;

    img {
    width: 2rem;
    height: 2rem;
}
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Icons>
                <Icon href="/barclays" target="_blanc">
                    <img src={require("../../assets/barclays-logo.png")} alt="" />
                </Icon>.
                <Icon href="/hcl" target="_blanc">
                    <img src={require("../../assets/hcl-logo.png")} alt="" />
                </Icon>
                <Icon href="/Revolut" target="_blanc">
                    <img src={require("../../assets/revolut-logo.png")} alt="" />
                </Icon>
            </Icons>
            <div>Support Us</div>
        </StyledFooter>
    )
}

export default Footer