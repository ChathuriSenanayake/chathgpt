import { Suspense, } from "react";
import YourFortuneResults from "./__components/Fortune";


export default function YourFortuneResultsPage() {
    // const params = useSearchParams();
    // const [step, setStep] = useState(1);
    // const textAnimateControls = useAnimation();
    // const nameanimateControls = useAnimation();

    // const fortune = useMemo(() => {
    //     try {
    //         const name = params.get("name")
    //         console.log("name:", name && decodeURIComponent(name).trim());
    //         const hasKey = name && data.find(item => decodeURIComponent(name).trim().toLowerCase() === item.name.toLowerCase());
    //         if (!hasKey) {
    //             throw new Error("name not found")
    //         }
    //         return hasKey.fortune
    //     } catch (error) {
    //         return "Your future is still being written. Check again a year later!";
    //     }

    // }, [params])

    // useEffect(() => {
    //     let timer: NodeJS.Timeout;
    //     switch (step) {
    //         case 1:
    //             timer = setTimeout(() => {
    //                 setStep(2);
    //             }, 8000);
    //             break;
    //         case 2:
    //             timer = setTimeout(() => {
    //                 setStep(3);
    //             }, 2000);
    //             nameanimateControls.start({
    //                 opacity: [0, 1],
    //                 scale: [0, 1],
    //                 rotate: [0, 360],
    //                 transition: { duration: 2 },
    //             });
    //             break;
    //         case 3:
    //             nameanimateControls.start({
    //                 y: [0, -50],

    //                 transition: { duration: 2 },
    //             });
    //             textAnimateControls.start({
    //                 y: [0, -10],
    //                 opacity: [0, 1],
    //                 transition: { duration: 2 },
    //             });
    //             break;
    //         default:
    //             break;
    //     }

    //     return () => clearTimeout(timer);
    // }, [step]);



    return (
        <Suspense fallback={<div className="min-h-screen flex flex-col font-sans overflow-clip" />}>
            <YourFortuneResults />
        </Suspense>
    );
}
