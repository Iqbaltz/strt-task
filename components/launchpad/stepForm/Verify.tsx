import styles from "./Verify.module.scss"
import { useState, useContext } from "react";
import cn from "@/libs/utils/cn";
import CreateTokenModal from "./CreateTokenModal/CreateTokenModal";
import {FormContext } from "@/libs/context/FormContext"


type Props = { step: any, setStep: any }

export default function Verify({ step, setStep }: Props) {
    const [errMsg, setErrMsg] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const {formData, setFormData} = useContext(FormContext)

    const handleInput = (e: any) => {
        const value = e.target.value
        setFormData({...formData, address: value})
        value.length > 0 ? setErrMsg("Invalid token address") : setErrMsg("Token address cannot be blank")
    }

    const isFormFilled = () => {
        const { name, symbol, decimals, totalSupply } = formData
        return name && symbol && decimals && totalSupply
    }

    return (
        <>
            <form className={styles.form}>
                <p className={styles.danger}>(*) is required field.</p>
                <div className={styles.flex}>
                    <h2>Token address<span className={styles.danger}>*</span></h2>
                    <button type="button" onClick={() => setOpenModal(!openModal)} className={styles.btnCreate}>
                        Create Token
                    </button>
                </div>
                <div className={styles.control}>
                    <input type="text" value={formData.address} onChange={handleInput} className={styles.input} />
                    <p className={styles.info}>Create pool fee: 1 BNB</p>
                    <p className={styles.danger}>{errMsg}</p>
                </div>
                {isFormFilled() &&
                    <div className={styles.preview}>
                        {previewItem.map((item) => (
                            <div key={item} className={styles.col}>
                                <p>{item}</p>
                                <p>{formData[item.toLowerCase()]}</p>
                            </div>
                        ))}
                    </div>
                }
                <div className={styles.centered}>
                    <button disabled={!isFormFilled()} type="button" onClick={() => setStep(step+1)} {...cn(styles.btnSubmit, !isFormFilled() && styles.disabled)}>Next</button>
                </div>
            </form>
            {openModal && <CreateTokenModal formData={formData} setFormData={setFormData} setOpen={setOpenModal} />}
        </>
    )
}

const previewItem = ["Name", "Symbol", "Decimals"]