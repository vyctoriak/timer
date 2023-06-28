import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  Divider,
  FormContainer,
  HomeContainer,
  StartCountdownButton,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="#">
        <FormContainer>
          <label htmlFor="task">I will work in</label>
          <input id="task" />

          <label htmlFor="minutesAmount">for</label>
          <input type="number" id="minutesAmount" />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Divider>:</Divider>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
