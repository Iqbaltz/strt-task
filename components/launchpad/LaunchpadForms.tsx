import styles from "./LaunchpadForms.module.scss"
import Verify from "./stepForm/Verify"
import Steps from "./Steps/Steps"
import { useState } from "react"
import Defi from "./stepForm/Defi"
import Additional from "./stepForm/Additional"
import Finish from "./stepForm/Finish"

type Props = {}

export default function LaunchpadForms({ }: Props) {
  const [step, setStep] = useState(0)

  return (
    <>
      <Steps step={step} />
      <div className={styles.body}>
        <div className={styles.wrapper}>
          {
            step < 1 ? <Verify step={step} setStep={setStep} />
          : step < 2? <Defi step={step} setStep={setStep} />
          : step < 3? <Additional step={step} setStep={setStep} />
          : <Finish step={step} setStep={setStep} />
        }
        </div>
      </div>
    </>
  )
}