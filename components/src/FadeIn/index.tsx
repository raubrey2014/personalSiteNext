import {FC, useEffect, useState} from "react";
import styled from "styled-components";

const FadeInAfter: FC<{ delay: number }> = ({ children, delay }) => {
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setOpacity(1)
        }, delay)
    })

    return (
        <OpacityWrapper opacity={opacity}>
            {children}
        </OpacityWrapper>
    )
}

const OpacityWrapper = styled.div<{ opacity: number}>`
  opacity: ${props => props.opacity};
  transition: opacity 1s ease-in-out;
`

export default FadeInAfter