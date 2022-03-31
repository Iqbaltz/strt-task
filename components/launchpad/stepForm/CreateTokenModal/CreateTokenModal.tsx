import cn from "../../../../libs/utils/cn"
import styles from "./CreateTokenModal.module.scss"
import {useState} from 'react'

type Props = {
    setOpen: any,
    setFormData: any,
    setAddress: any,
    formData: any
};
export default function CreateTokenModal({formData, setAddress, setOpen, setFormData }: Props) {
    const [tokenData, setTokenData] = useState({
        name: "",
        symbol: "",
        decimals: "",
        totalSupply: ""
    })
    
    const handleClose = (e: any) => {
        e.target.classList.contains(styles.modal) && setOpen(false)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setAddress("dummyaddress123")
        setFormData({...formData, ...tokenData})
        setOpen(false)
    }

    const isFormValid = ()=>{
        const {name, symbol, decimals, totalSupply} = tokenData
        return name && symbol && decimals && totalSupply
    }

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <button type="button" onClick={() => setOpen(false)} className={styles.btnClose}>x</button>
                    <div className={styles.title}>Create token</div>
                </div>
                <div className={styles.body}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <p className={styles.danger}>(*) is required field.</p>
                        <div className={styles.field}>
                            <label htmlFor="tokenType">Token Type<span className={styles.danger}>*</span></label>
                            <select name="tokenType" id="tokenType" className={styles.input} required>
                                <option value="standard">Standard Token</option>
                                <option value="liquidity">Liquidity Generator Token</option>
                                <option value="baby">Baby Token</option>
                                <option value="buyback">Buyback Baby Token</option>
                            </select>
                        </div>

                        <div className={styles.field} >
                            <label htmlFor="name">Name<span className={styles.danger}>*</span></label>
                            <input className={styles.input} value={tokenData.name} onChange={(e) => setTokenData({...tokenData, name: e.target.value})} type="text" id="name" name="name" />
                        </div>
                        <div className={styles.field} >
                            <label htmlFor="symbol">Symbol<span className={styles.danger}>*</span></label>
                            <input className={styles.input} value={tokenData.symbol} onChange={(e) => setTokenData({...tokenData, symbol: e.target.value})} type="text" id="symbol" name="symbol" />
                        </div>
                        <div className={styles.field} >
                            <label htmlFor="decimals">Decimals<span className={styles.danger}>*</span></label>
                            <input className={styles.input} value={tokenData.decimals} onChange={(e) => setTokenData({...tokenData, decimals: e.target.value})} type="number" id="decimals" name="decimals" />
                        </div>
                        <div className={styles.field} >
                            <label htmlFor="totalSupply">Total Supply<span className={styles.danger}>*</span></label>
                            <input className={styles.input} value={tokenData.totalSupply} onChange={(e) => setTokenData({...tokenData, totalSupply: e.target.value})} type="number" id="totalSupply" name="totalSupply" />
                        </div>


                        <div className={styles.field}>
                            <input type="checkbox" />
                            <span>Implement Strt Anti-Bot System?</span>
                        </div>
                        <div className={styles.centered}>
                            <button disabled={!isFormValid()}  type="submit" {...cn(styles.btnSubmit, !isFormValid() && styles.disabled)}>Create Token</button>
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