import { useState } from "react"
import { ControlledForm } from "./forms/ControlledForm"
import { ControlledModal } from "./modals/ControlledModal"
import { UncontrolledForm } from "./forms/UncontrolledForm"
import { UncontrolledOnboardingFlow } from "./onboardingFlows/UncontrolledOnboardingFlow"
import { ControlledOnboardingFlow } from "./onboardingFlows/ControlledOnboardingFlow"

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'Jhon Doe' })} >Go to Next</button>
  </>
)
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 22 })} >Go to Next</button>
  </>
)
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations!</p>
    <button onClick={() => goToNext({})} >Go to Next</button>
  </>
)
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: 'Black' })} >Go to Next</button>
  </>
)

function UncontrolledControlledComponents() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData })
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <ControlledOnboardingFlow
      currentIndex={currentIndex}
      onNext={onNext}
    >
      <StepOne />
      <StepTwo />
      {onboardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  )
}

export default UncontrolledControlledComponents