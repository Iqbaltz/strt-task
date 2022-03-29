import cn from "../../libs/utils/cn"
import styles from "./Step.module.scss"

type Props = {}

export default function Step({ }: Props) {
    const active = 1;
    return (
        <div className={styles.steps}>
            {stepContent.map(({ number, title, caption }) => (
                <div key={number} {...cn(styles.step, active === number && styles.active)}>
                    <div className={styles.number}>
                        <div className={styles.wrapper}>
                            {number}
                        </div> 
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.caption}>{caption}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

const stepContent = [
    {
        number: 1,
        title: "Verify Token",
        caption: "Enter the token address and verify"
    },
    {
        number: 2,
        title: "DeFi Launchpad Info",
        caption: "Enter the launchpad information that you want to raise , that should be enter all details about your presale"
    },
    {
        number: 3,
        title: "Add Additional Info",
        caption: "Let people know who you are"
    },
    {
        number: 4,
        title: "Finish",
        caption: "Review your information"
    },
]