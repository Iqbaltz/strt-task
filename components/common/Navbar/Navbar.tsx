import ButtonConnect from "./ButtonConnect/ButtonConnect";
import ButtonSwitch from "./ButtonSwitch/ButtonSwitch";
import styles from "./Navbar.module.scss";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className={styles.nav}>
        <ButtonSwitch />
        <ButtonConnect />
    </nav>
  )
}