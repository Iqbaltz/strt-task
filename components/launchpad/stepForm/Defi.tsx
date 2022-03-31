import styles from "./Defi.module.scss"
import cn from "../../../libs/utils/cn";

type Props = { formData: any,setFormData: any, step: any, setStep: any }

export default function Defi({formData,step, setStep, setFormData}: Props) {

  const isFormFilled = () => {
    const { presaleRate, listingRate, softcap, hardcap, refundType, minBuy, maxBuy, liquidity, startTime, endTime, liquidityLockup } = formData
    return presaleRate && listingRate && softcap && hardcap && refundType && minBuy && maxBuy && liquidity && startTime && endTime && liquidityLockup
  }
  return (
    <form className={styles.form}>
      <p className={styles.danger}>(*) is required field.</p>
      <div className={styles.field} >
        <label htmlFor="presaleRate">Presale Rate<span className={styles.danger}>*</span></label>
        <input className={styles.input} type="number" value={formData.presaleRate} onChange={(e) => setFormData({...formData, presaleRate: e.target.value})} id="presaleRate" name="presaleRate" />
      </div>
      <div className={styles.field}>
        <label htmlFor="whitelist">Whitelist</label>
        <div className={styles.choices}>
          <input type="radio" defaultChecked id="disable" name="whitelist" value="disable" />
          <label htmlFor="disable">Disable</label>
          <input type="radio" id="enable" name="whitelist" value="enable" />
          <label htmlFor="enable">Enable</label>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="softcap">Softcap (BNB)<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.softcap} onChange={(e) => setFormData({...formData, softcap: e.target.value})} type="number" id="softcap" name="softcap" />
        </div>
        <div className={styles.field} >
          <label htmlFor="hardcap">Hardcap (BNB)<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.hardcap} onChange={(e) => setFormData({...formData, hardcap: e.target.value})} type="number" id="hardcap" name="hardcap" />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="minBuy">Minimum buy (BNB)<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.minBuy} onChange={(e) => setFormData({...formData, minBuy: e.target.value})} type="number" id="minBuy" name="minBuy" />
        </div>
        <div className={styles.field} >
          <label htmlFor="maxBuy">Maximum Buy (BNB)<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.maxBuy} onChange={(e) => setFormData({...formData, maxBuy: e.target.value})} type="number" id="maxBuy" name="maxBuy" />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="refundType">Refund type</label>
          <select name="refundType" id="refundType" value={formData.refundType} onChange={(e) => setFormData({...formData, refundType: e.target.value})} className={styles.input}>
            <option value="refund">Refund</option>
            <option value="burn">Burn</option>
          </select>
        </div>
        <div className={styles.field} >
          <label htmlFor="router">Router<span className={styles.danger}>*</span></label>
          <select name="router" id="router" value={formData.router} onChange={(e) => setFormData({...formData, router: e.target.value})} className={styles.input}>
            <option value="pancakeswap">Pancakeswap</option>
            <option value="pinkswaptestnet">Pinkswap Testnet</option>
          </select>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="liquidity">Pancakeswap liquidity(%)<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.liquidity} onChange={(e) => setFormData({...formData, liquidity: e.target.value})} type="number" id="liquidity" name="liquidity" />
        </div>
        <div className={styles.field} >
          <label htmlFor="listingRate">Pancakeswap listing rate<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.listingRate} onChange={(e) => setFormData({...formData, listingRate: e.target.value})} type="number" id="listingRate" name="listingRate" />
        </div>
      </div>
      <label>Select start time & end time (UTC)</label><br />
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="startTime">Start time (UTC)<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.startTime} onChange={(e) => setFormData({...formData, startTime: e.target.value})} type="date" id="startTime" name="startTime" />
        </div>
        <div className={styles.field} >
          <label htmlFor="endTime">End time (UTC)<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.endTime} onChange={(e) => setFormData({...formData, endTime: e.target.value})} type="date" id="endTime" name="endTime" />
        </div>
      </div>
      <div className={styles.field} >
        <label htmlFor="liquidityLockup">Liquidity lockup (minutes)<span className={styles.danger}>*</span></label>
        <input className={styles.input} value={formData.liquidityLockup} onChange={(e) => setFormData({...formData, liquidityLockup: e.target.value})} type="number" id="liquidityLockup" name="liquidityLockup" />
      </div>
      <div className={styles.field}>
        <input type="checkbox" />
        <span> Using Vesting Contributor?</span>
      </div>
      <div className={styles.field}>
        <input type="checkbox" />
        <span> Using Team Vesting ?</span>
      </div>
      <div className={styles.centered}>
        <button  type="button" onClick={() => setStep(step-=1)} {...cn(styles.btnPrev)}>Prev</button>
        <button disabled={!isFormFilled()}  type="button" onClick={() => setStep(step+=1)} {...cn(styles.btnNext,!isFormFilled() && styles.disabled)}>Next</button>
      </div>
    </form>
  )
}