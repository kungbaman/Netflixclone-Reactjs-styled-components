import styled from "styled-components";

import HDBG from "../../assets/header-background.jpg"

export const HeaderCtn = styled.section`
    height: 720px;
    // border: 2px solid red;
    background: url(${HDBG});
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    background-position: center;
    background-size: cover;
    border-bottom: 8px solid #222;
`

export const NavCtn = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;

    svg {
        width: 150px;
        fill: #e50914;
    }
`

export const Menu = styled.ul`
    display: flex;
    gap: 2rem;

    li {
        list-style: none;
    }
`

export const HeaderDesc = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 580px;
    text-align: center;
`