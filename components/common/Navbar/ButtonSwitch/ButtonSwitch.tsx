import styles from "./ButtonSwitch.module.scss"
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import { useState } from "react"

const NetworkMetadata = (props: {
    icon: React.ComponentType | string
    chainName: string
    symbol: string
    isTestnet: boolean
}) => {
    const { chainName } = props

    if (!props || !chainName) {
        return <></>
    }

    const { icon, isTestnet } = props

    const ChainIconElement = icon

    return (
        <>
            {chainName}
            {/* <div>
          <ChainIconElement />
        </div>
        <p>{chainName}</p>
        hell */}
            {isTestnet && <p>(testnet)</p>}
        </>
    )
}


export default function ButtonSwitch(props: {}) {
    const [openDropdown, setOpenDropdown] = useState(false)
    const web3 = useWeb3()

    const { chainId, getNetworkMetadata } = web3

    const { switchNetwork } = useSwitchNetwork()

    const handleSwitchNetwork = (chainId: number) =>{
        switchNetwork(chainId)
        setOpenDropdown(!openDropdown)
    }


    let networkMetadata = null

    if (chainId) {
        networkMetadata = getNetworkMetadata(chainId)
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.btn} onClick={() => setOpenDropdown(!openDropdown)}>Switch Network</button>
            <ul className={openDropdown ? styles.dropdown : styles.close}>
                <li className={styles.item} onClick={() => handleSwitchNetwork(80001)}>
                    Switch to Polygon Mumbai
                </li>
                <li className={styles.item} onClick={() => handleSwitchNetwork(97)}>
                    Switch to BSC Testnet
                </li>
            </ul>

        </div>
    )
}