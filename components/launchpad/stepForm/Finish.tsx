import styles from "./Finish.module.scss"

type Props = { formData: any, step: any, setStep: any }

export default function Finish({ formData, step, setStep }: Props) {
  return (
    <div className={styles.preview}>
      <div className={styles.col}>
        <p>Token name</p>
        <p className={styles.val}>{formData.name}</p>
      </div>
      <div className={styles.col}>
        <p>Token symbol</p>
        <p className={styles.val}>{formData.symbol}</p>
      </div>
      <div className={styles.col}>
        <p>Token decimals</p>
        <p className={styles.val}>{formData.decimals}</p>
      </div>
      <div className={styles.col}>
        <p>Presale rate</p>
        <p className={styles.val}>{formData.presaleRate} {formData.symbol}</p>
      </div>
      <div className={styles.col}>
        <p>Listing rate</p>
        <p className={styles.val}>{formData.listingRate} {formData.symbol}</p>
      </div>
      <div className={styles.col}>
        <p>Softcap</p>
        <p className={styles.val}>{formData.softcap} BNB</p>
      </div>
      <div className={styles.col}>
        <p>Hardcap</p>
        <p className={styles.val}>{formData.hardcap} BNB</p>
      </div>
      <div className={styles.col}>
        <p>Unsold tokens</p>
        <p className={styles.val}>{formData.refundType}</p>
      </div>
      <div className={styles.col}>
        <p>Min buy</p>
        <p className={styles.val}>{formData.minBuy} BNB</p>
      </div>
      <div className={styles.col}>
        <p>Max buy</p>
        <p className={styles.val}>{formData.maxBuy} BNB</p>
      </div>
      <div className={styles.col}>
        <p>liquidity</p>
        <p className={styles.val}>{formData.liquidity}%</p>
      </div>
      <div className={styles.col}>
        <p>Start time</p>
        <p className={styles.val}>{formData.startTime}</p>
      </div>
      <div className={styles.col}>
        <p>End time</p>
        <p className={styles.val}>{formData.endTime}</p>
      </div>
      <div className={styles.col}>
        <p>Liquidity lockup time</p>
        <p className={styles.val}>{formData.liquidityLockup}</p>
      </div>
      <div className={styles.col}>
        <p>Website</p>
        <p className={styles.val}>{formData.website}</p>
      </div>
      <div className={styles.centered}>
        <button  type="button" onClick={() => setStep(step-=1)} className={styles.btnPrev}>Prev</button>
        <button  type="button"  className={styles.btnSubmit}>Submit</button>
      </div>
    </div>
  )
}
