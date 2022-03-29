import Navbar from "./Navbar/Navbar"

type Props = { children?: JSX.Element | JSX.Element[];}

export default function Layout({ children }: Props) {
    return (
        <>
        <main>
            <Navbar />
            {children}
        </main>
        </>
    )
}