import { useEffect } from "react";

export default function Label() {
    useEffect(() => {
        console.log("Label component mounted");

        return () => {
            console.log("Label component unmounted");
        }
    }, []);

    return <h1>Label components</h1>
};
