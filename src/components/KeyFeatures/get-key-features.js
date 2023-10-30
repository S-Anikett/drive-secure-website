import {BiSolidBellRing} from "react-icons/bi"
import {MdScore} from "react-icons/md"
import {HiUserGroup} from "react-icons/hi"
import {BsCameraVideoFill} from "react-icons/bs"

const FEATURES = [
    {
        key: "drowsiness_detection",
        title: "Drowsiness Detection",
        desc: "Our app utilizes sophisticated algorithms and machine learning to identify signs of driver fatigue and drowsiness.",
        icon: BsCameraVideoFill
    },
    {
        key: "real_time_alerts",
        title: "Real-Time alerts",
        desc: "DriveSecure provides instant alerts when it senses that you may be falling asleep at the wheel, helping you stay awake and focused",
        icon: BiSolidBellRing
    },
    {
        key: "driver_score",
        title: "Driver Score",
        desc: "Monitor your overall driving performance with a personalized score, encouraging safer driving practices.",
        icon: MdScore
    },
    {
        key: "community_ranking",
        title: "Community Awareness",
        desc: "Designed to foster a sense of unity among our users, encouraging them to come together to make the road a safer place for all",
        icon: HiUserGroup
    },
]

export default FEATURES