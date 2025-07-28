import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    padding: 1rem 1.5rem 7.5rem;
    overflow-y: auto;
    grid-area: content;

    display: grid;
    grid-template-columns: 530px auto;
    grid-template-rows: auto 250px 240px;
    grid-template-areas:
        "selectDomain selectDomain"
        "gaugeChars linearProgressChar"
        "barChar linearProgressChar";
    gap: 15px;

    .selectDomain {
        grid-area: selectDomain;
    }

    .gaugeChars {
        grid-area: gaugeChars;
    }

    .barChar {
        grid-area: barChar;
    }

    .linearProgressChar {
        grid-area: linearProgressChar;
    }
`;

export const W50 = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        flex-direction: row;
        gap: 10px;

        > div, button {
            width: 50%;
        }

        .button {
            margin-bottom: 8px;
        }
    }
`;

export const InputWrapper = styled.div`
    width: 100%;

    &:not(:first-of-type) {
        margin-top: 10px;
    }

    > label {
        font-size: 1.1rem;
        font-weight: 600;
    }

    > div {
        margin-top: 5px;
    }
`;