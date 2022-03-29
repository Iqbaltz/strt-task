import cn from "../../../libs/utils/cn"
import styles from "./CreateTokenModal.module.scss"

type Props = {
    setOpen: any;
  };
export default function CreateTokenModal({setOpen}: Props) {
    const handleClose = (e: any) => {
        e.target.classList.contains(styles.modal) && setOpen(false)
      }
    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <button type="button" onClick={() => setOpen(false)} className={styles.btnClose}>x</button>
                    <div className={styles.title}>Create token</div>
                </div>
                <div className={styles.body}>
                    <form className={styles.form}>
                        <p className={styles.danger}>(*) is required field.</p>
                        <div className={styles.field}>
                            <label htmlFor="tokenType">Token Type<span className={styles.danger}>*</span></label>
                            <select name="tokenType" id="tokenType" className={styles.input}>
                                <option value="standard">Standard Token</option>
                                <option value="liquidity">Liquidity Generator Token</option>
                                <option value="baby">Baby Token</option>
                                <option value="buyback">Buyback Baby Token</option>
                            </select>
                        </div>
                        {
                            inputItem.map(({label, title, type})=>(
                                <div key={title} className={styles.field} >
                                    <label htmlFor={title}>{label}<span className={styles.danger}>*</span></label>
                                    <input className={styles.input} type={type} id={title} name={title} />
                                </div>
                            ))
                        }
                        <div className={styles.field}>
                            <input type="checkbox" />
                            <span>Implement Strt Anti-Bot System?</span>
                        </div>
                        <div className={styles.centered}>
                            <button disabled type="submit" {...cn(styles.btnSubmit, styles.disabled)}>Create Token</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const inputItem = [
    {
        label: "Name",
        title: "name",
        type: "text",
    },
    {
        label: "Symbol",
        title: "symbol",
        type: "text",
    },
    {
        label: "Decimals",
        title: "decimals",
        type: "number",
    },
    {
        label: "Total supply",
        title: "totalSupply",
        type: "number",
    },
]