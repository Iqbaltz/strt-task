import cn from "../../libs/utils/cn";
import styles from "./Forms.module.scss";

type Props = {}

export default function Forms({ }: Props) {
    return (
        <div className={styles.wrapper}>
            <form className={styles.forms}>
                <span className={styles.help}>(*) is required field.</span>
                <div className={styles.flex}>
                    <h2>Token address<span className={styles.help}>*</span></h2>
                    <button type="button" className={styles.btnCreate}>
                        Create Token
                    </button>
                </div>
                <div className={styles.control}>
                    <input type="text" className={styles.input} />
                    <span className={styles.help}>Token address cannot be blank</span>
                </div>
                <div className={styles.centered}>
                    <button disabled type="submit" {...cn(styles.btnSubmit, styles.disabled)}>Next</button>
                </div>
            </form>
        </div>
    )
}