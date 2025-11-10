import { useState } from "react";
import { AuthContext } from "./AuthContext"

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const userData = { user, setUser };
    return <AuthContext value={userData}>{children}</AuthContext>;
}

export default AuthProvider;