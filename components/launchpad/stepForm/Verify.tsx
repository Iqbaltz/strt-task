import styles from "./Verify.module.scss"
import { useState } from "react";
import cn from "../../../libs/utils/cn";
import CreateTokenModal from "./CreateTokenModal/CreateTokenModal";

type Props = { formData: any,setFormData: any, step: any, setStep: any }

export default function Verify({ formData,step, setStep, setFormData }: Props) {
    const [address, setAddress] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [openModal, setOpenModal] = useState(false)

    const handleInput = (e: any) => {
        const value = e.target.value
        setAddress(value)
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
                    <input type="text" value={address} onChange={handleInput} className={styles.input} />
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
                    <button disabled={!isFormFilled()} type="button" onClick={() => setStep(step+=1)} {...cn(styles.btnSubmit, !isFormFilled() && styles.disabled)}>Next</button>
                </div>
            </form>
            {openModal && <CreateTokenModal formData={formData} setAddress={setAddress} setFormData={setFormData} setOpen={setOpenModal} />}
        </>
    )
}

const previewItem = ["Name", "Symbol", "Decimals"]