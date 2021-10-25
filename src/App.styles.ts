import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
    margin: 40px;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export const StyledButton = styled(IconButton)`
    z-index: 100;
`;