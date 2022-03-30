import styles from "./ButtonConnect.module.scss";
import { useWeb3 } from "@3rdweb/hooks"


export default function ButtonConnect() {
    const web3 = useWeb3()

    const { address, connectWallet, disconnectWallet } = web3
    
    return (
        <>
            {address ? <button className={styles.btn} onClick={disconnectWallet}>{address.slice(0,6)}...{address.slice(38)}</button> : <button className={styles.btn} onClick={() => connectWallet('injected')}>Connect</button>}
        </>
    )
}