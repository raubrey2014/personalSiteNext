import {FC} from 'react'
import styled from 'styled-components'
import Signature from "../Signature";

interface Props {
    title: string
}

const names = ["Anonymous", "Neha Desai", "Anonymous", "MM", "Kbow", "Ned", "Anonymous", "Ben KB", "Willber", "Anthony", "Hugh", "Michelle", "Anon", "Anonymous", "MT", "Jeff", "John", "Anonymous", "Anonymous", "Conor", "Brad Johnson", "Bill Lenoir", "Anonymous", "Deb", "Anonymous", "Robert de Wolff"]
const signatures = names.map((x, index) => ({name: x, id: index, random: Math.round(Math.random() * 10)}))


const Hero: FC<Props> = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <H1>Water for 2021</H1>
            </TextWrapper>

            <SignaturesWrapper>
                {signatures.map(signature => {
                    return (
                        <Signature name={signature.name} random={signature.random} key={signature.id}/>
                    )
                })}
            </SignaturesWrapper>

            {/*<Link href="https://www.charitywater.org/ryan-aubrey">Join The Spring</Link>*/}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  text-align: center;
`
const TextWrapper = styled.div`

`
const SignaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const H1 = styled.h1`
  font-family: 'Archivo Black';
  text-transform: uppercase;
  font-size: 6rem;
  padding: 0;
  margin: 0;
`
export default Hero