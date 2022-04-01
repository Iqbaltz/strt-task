import {createContext, useState} from 'react'

export const FormContext = createContext<any | undefined>(undefined)

type Props = {children?: JSX.Element | JSX.Element[];}

export default function FormProvider({children}: Props) {
    const [formData, setFormData] = useState({
      address: "",
      presaleRate: "",
      softcap: "",
      hardcap: "",
      minBuy: "",
      maxBuy: "",
      refundType: "refund",
      router: "pancakeswap",
      liquidity: "",
      listingRate: "",
      startTime: "",
      endTime: "",
      liquidityLockup: "",
      logoUrl: "",
      website: ""
    })
    return (
    <FormContext.Provider value={{formData, setFormData}}>
        {children}
    </FormContext.Provider>
  )
}