import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useDelayedNavigate = (path, delay) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(()=> {
            navigate(path, {
                replace: true, //뒤로가기로 Splash에 돌아가는 것을 막아준대요
            });
        },delay);

        return () => {
            clearTimeout(timer);
        };  
    }, [navigate, path, delay]);
};
export default useDelayedNavigate