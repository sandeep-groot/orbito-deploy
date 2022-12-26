import * as React from "react"
import { useEffect } from "react"
import Seo from "../components/seo"
import SignInPage from "../components/SignInPage"
import { isUserLoggedIn } from "../utils/functions"
import { navigate } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const SignIn = props => { 
  const { serverData } = props

    useEffect(() => {
      if(isUserLoggedIn()){
        navigate('/admin');      
      }
    
      return () => {
        
      }
    }, [])
    
     return<> 
      <GatsbySeo
     {...serverData}
       title="Sign In"
       description="A short description for login page goes here."
     />  <SignInPage {...props} />
      </>
    }
  
//   export const Head = () => <Seo title="Login" />
    
export default SignIn

