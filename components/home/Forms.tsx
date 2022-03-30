import { useState } from "react";
import cn from "../../libs/utils/cn";
import CreateTokenModal from "./CreateTokenModal/CreateTokenModal";
import styles from "./Forms.module.scss";

type Props = {}

export default function Forms({ }: Props) {
    const [address, setAddress] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [openModal, setOpenModal] = useState(false)

    const checkInput = (e: any) => {
        const value = e.target.value
        setAddress(value)
        value.length > 0? setErrMsg("Invald token address"): setErrMsg("Token address cannot be blank")
    }
    return (
        <div className={styles.wrapper}>
            <form className={styles.forms}>
                <p className={styles.danger}>(*) is required field.</p>
                <div className={styles.flex}>
                    <h2>Token address<span className={styles.danger}>*</span></h2>
                    <button type="button" onClick={()=> setOpenModal(!openModal)} className={styles.btnCreate}>
                        Create Token
                    </button>
                </div>
                <div className={styles.control}>
                    <input type="text" value={address} onChange={checkInput} className={styles.input} />
                    <p className={styles.info}>Create pool fee: 1 BNB</p>
                    <p className={styles.danger}>{errMsg}</p>
                </div>
                <div className={styles.centered}>
                    <button disabled type="submit" {...cn(styles.btnSubmit, styles.disabled)}>Next</button>
                </div>
            </form>
            {openModal && <CreateTokenModal setOpen={setOpenModal} />}
        </div>
    )
}