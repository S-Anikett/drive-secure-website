import login from "../../assets/login.png"
import otp from "../../assets/otp.png"
import dashboard from "../../assets/dashboard.png"
import trip from "../../assets/trip.png"
import profile from "../../assets/profile.png"

const CAROUSSEL_ITEMS = [
    {
        title: "Login",
        desc: "Enter your mobile number in the field provided",
        src: login
    },
    {
        title: "OTP",
        desc: "Enter Otp sent at provided mobile number",
        src: otp
    },
    {
        title: "Dashboard",
        desc: "This is dashboard page, here you can see your activity and statistics",
        src: dashboard
    },
    {
        title: "Start trip",
        desc: 'You can start your trip by simply clicking on the "Start Trip" button and giving necessary permissions',
        src: trip
    },
    {
        title: "Profile",
        desc: "This page displays your profile data. You can edit profile from here and logout from the app",
        src: profile
    },
]

export default CAROUSSEL_ITEMS