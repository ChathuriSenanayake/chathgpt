import { Suspense, } from "react";
import YourFortuneResults from "./__components/Fortune";


export default function YourFortuneResultsPage() {

    return (
        <Suspense fallback={<div className="min-h-screen flex flex-col font-sans overflow-clip" />}>
            <YourFortuneResults />
        </Suspense>
    );
}
