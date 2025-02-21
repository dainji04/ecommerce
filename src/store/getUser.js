import "firebase/auth";
import { onAuthStateChanged, getAuth } from "firebase/auth";

export default function () {
    const getCurrentUser = () => {
        return new Promise((resolve, reject) => {
            const removeListener = onAuthStateChanged(
                getAuth(),
                (user) => {
                    removeListener();
                    resolve(user);
                },
                reject
            );
        });
    };
    return {
        getCurrentUser,
    };
}
