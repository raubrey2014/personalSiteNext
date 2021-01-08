import {FC} from "react";
import FadeInAfter from "../FadeIn";
import styled from "styled-components";

const Signature: FC<{ name: string, random: number }> = ({name, random}) => {
    return (
        <FadeInAfter delay={1000 * random}>
            <SignatureWrapper>
                <P>{name}</P>
            </SignatureWrapper>
        </FadeInAfter>
    )
}

const SignatureWrapper = styled.div`
  transition: opacity 1s ease-in-out;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`

const P = styled.p`
  font-size: 1.5rem;
  font-family: 'Allura', cursive;
`

export default Signature