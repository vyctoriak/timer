import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  Divider,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="#">
        <FormContainer>
          <label htmlFor="task">I will work in</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="give your task a name"
          />

          <datalist id="task-suggestions">
            <option value="First Project" />
            <option value="Second Project" />
            <option value="Third Project" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

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
