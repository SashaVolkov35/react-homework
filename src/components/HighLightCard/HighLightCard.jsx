import styled from "styled-components"
import { colors, fontSizes, margins } from "../../theme/theme";

const Card = styled.div`
    width: 19rem;
    height: 19rem;
    background: ${colors.bg};
    margin: 0 auto ${margins.sm};
    
`;
const Title = styled.div`
    width: 19rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.md};
    font-weight: 700;
    color: ${colors.darkBlue};
    margin-top: 0.5rem;
    margin: 0 auto ${margins.sm};

    &:last-child {
        margin: 0 auto;
    }
`;

const HighLightCard = ({title}) => {
    return (
        <>
        <Card />
        <Title>{title}</Title>
        </>   
    )
};

export default HighLightCard;