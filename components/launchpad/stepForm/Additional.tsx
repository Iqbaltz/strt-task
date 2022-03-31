import styles from "./Additional.module.scss"
import cn from "../../../libs/utils/cn";

type Props = { formData: any, setFormData: any, step: any, setStep: any }

export default function Additional({ formData, step, setStep, setFormData }: Props) {

  const isFormFilled = () =>{
    const { logoUrl, website } = formData
    return logoUrl && website
  }

  return (
    <form className={styles.form}>
      <p className={styles.danger}>(*) is required field.</p>
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="logoUrl">Logo URL<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.logoUrl} onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })} type="url" id="logoUrl" name="logoUrl" />
        </div>
        <div className={styles.field} >
          <label htmlFor="website">Website<span className={styles.danger}>*</span></label>
          <input className={styles.input} value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} type="url" id="website" name="website" />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="facebook">Facebook</label>
          <input className={styles.input} type="url" id="facebook" name="facebook" />
        </div>
        <div className={styles.field} >
          <label htmlFor="twitter">Twitter</label>
          <input className={styles.input} type="url" id="twitter" name="twitter" />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="github">Github</label>
          <input className={styles.input} type="url" id="github" name="github" />
        </div>
        <div className={styles.field} >
          <label htmlFor="telegram">Telegram</label>
          <input className={styles.input} type="url" id="telegram" name="telegram" />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.field} >
          <label htmlFor="reddit">Reddit</label>
          <input className={styles.input} type="url" id="reddit" name="reddit" />
        </div>
        <div className={styles.field} >
          <label htmlFor="discord">Discord</label>
          <input className={styles.input} type="url" id="discord" name="discord" />
        </div>
      </div>
      <div className={styles.field} >
        <label htmlFor="description">Description</label>
        <textarea className={styles.input} name="description" id="description"></textarea>
      </div>
      <div className={styles.centered}>
        <button type="button" onClick={() => setStep(step -= 1)} {...cn(styles.btnPrev)}>Prev</button>
        <button disabled={!isFormFilled()} type="button" onClick={() => setStep(step += 1)} {...cn(styles.btnNext, !isFormFilled() && styles.disabled)}>Next</button>
      </div>
    </form>
  )
}