import Header from "@/components/Header";

export default function dashboardLayout({children}) {
    return(
        <>
        <Header/>
        {children}
        </>
    )
}