import styled from 'styled-components';

export const BasicCardContainer = styled.div`
    display: grid;
    place-content: center;
    width: 30%;
    padding: 1vmax;
    border: 3px solid #fff;
    border-radius: 15px;
    gap: 1vmax;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #fff;
        color: #000;

    }
`;