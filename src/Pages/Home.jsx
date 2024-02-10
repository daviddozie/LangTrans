import useLocalStorage from "use-local-storage";
import Toggle from "../components/Toggle";

function Home() {

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    return (
        <div className="min-h-[100vh] w-full" data-theme={isDark ? "dark" : "light"}>
            <header className="w-[full] py-[20px]">
                <div className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between py-5 rounded-[40px] relative">
                    <div>
                        <h1 className="text-[#048970] text-[30px] font-[600]">LangTrans</h1>
                    </div>
                    <div>
                        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home