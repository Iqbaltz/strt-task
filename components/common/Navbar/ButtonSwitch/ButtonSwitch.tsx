import styles from "./ButtonSwitch.module.scss"
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import { useState } from "react"

// const NetworkMetadata = (props: {
//     iconUrl: React.ComponentType | string
//     chainName: string
//     symbol: string
//     isTestnet: boolean
// }) => {
//     const { chainName } = props

//     if (!props || !chainName) {
//         return <></>
//     }

//     const { iconUrl, isTestnet } = props

//     const ChainIconElement = iconUrl

//     return (
//         <>
//             {chainName}
//             <div>
//           <ChainIconElement />
//         </div>
//         <p>{chainName}</p>
//             {isTestnet && <p>(testnet)</p>}
//         </>
//     )
// }


export default function ButtonSwitch() {
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
        if(chainId == 97){ //cannot get data from BSC net but can connect
            networkMetadata.chainName = "BSC Testnet"
        }
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.btn} onClick={() => setOpenDropdown(!openDropdown)}>
                {networkMetadata? networkMetadata.chainName : "Switch Network"}
                </button>
            <ul className={openDropdown ? styles.dropdown : styles.close}>
                <li className={styles.item} onClick={() => handleSwitchNetwork(80001)}>
                    Switch to Polygon Mumbai (Testnet)
                </li>
                <li className={styles.item} onClick={() => handleSwitchNetwork(97)}>
                    Switch to BSC Testnet
                </li>
            </ul>

        </div>
    )
}