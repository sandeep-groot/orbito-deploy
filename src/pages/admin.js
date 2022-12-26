import * as React from "react"
import { useState, useEffect } from "react"
import AdminPage from "../components/AdminPage"
import SignInPage from "../components/SignInPage"
import Seo from "../components/seo"

const Admin = props => { 
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
      setShowChild(true);
    }, []);
  
    if (!showChild) {
      return null;
    }
  
    if (typeof window !== 'undefined' && localStorage.getItem('LOGGED_IN') ) {
        return <AdminPage {...props}/>
    } else {
        return <SignInPage {...props}/>
    }

}

export const Head = () => <Seo title="Admin" />

export default Admin;
