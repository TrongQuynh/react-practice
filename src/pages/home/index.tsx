import { useEffect, useState } from "react";
import Label from "./components/Label/Label";

export function Home(){
    const [count, setCount] = useState(0);
    const [isShowLabel, setIsShowLabel] = useState(false);

    useEffect(() => {
        console.log("Setup function no dependecy");

        return () => {
            console.log("Cleanup function no dependecy");
        }
    }, []);

    useEffect(() => {
        console.log("Setup function with dependecy");

        return () => {
            console.log("Cleanup function with dependecy");
        }
    }, [count]);

    return <>
        <div>Home</div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
        <button onClick={() => setIsShowLabel(!isShowLabel)}>{isShowLabel ? "Hide Label" : "Show Label"}</button>
        {isShowLabel && <Label />}
    </>
}