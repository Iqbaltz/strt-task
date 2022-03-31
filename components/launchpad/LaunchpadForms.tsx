import styles from "./LaunchpadForms.module.scss"
import Verify from "./stepForm/Verify"
import Steps from "./Steps/Steps"
import { useState } from "react"
import Defi from "./stepForm/Defi"
import Additional from "./stepForm/Additional"


type Props = {}

export default function LaunchpadForms({ }: Props) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    presaleRate: "",
    softcap: "",
    hardcap: "",
    minBuy: "",
    maxBuy: "",
    refundType: "",
    router: "",
    liquidity: "",
    listingRate: "",
    startTime: "",
    endTime: "",
    liquidityLockup: ""
  })

  return (
    <>
      <Steps step={step} />
      <div className={styles.body}>
        <div className={styles.wrapper}>
          {
            step < 1 ? <Verify formData={formData} step={step} setFormData={setFormData} setStep={setStep} />
          : step < 2? <Defi formData={formData} step={step} setFormData={setFormData} setStep={setStep} />
          : <Additional />
          }
        </div>
      </div>
    </>
  )
}