import { useState } from "react";
import cn from "../../libs/utils/cn";
import CreateTokenModal from "./CreateTokenModal/CreateTokenModal";
import styles from "./Forms.module.scss";

type Props = {}

export default function Forms({ }: Props) {
    const [address, setAddress] = useState("")
    const [openModal, setOpenModal] = useState(false)

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
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className={styles.input} />
                    <p className={styles.info}>Create pool fee: 1 BNB</p>
                    <p className={styles.danger}>{address ? "Invalid token address": "Token address cannot be blank"}</p>
                </div>
                <div className={styles.centered}>
                    <button disabled type="submit" {...cn(styles.btnSubmit, styles.disabled)}>Next</button>
                </div>
            </form>
            {openModal && <CreateTokenModal setOpen={setOpenModal} />}
        </div>
    )
}