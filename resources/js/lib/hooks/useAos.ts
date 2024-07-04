import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function useAos() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
}
