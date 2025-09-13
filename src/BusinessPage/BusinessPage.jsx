
import AwardPage from "./AwardPage";
import VisionMission from "./Vision&Mission";
import ContactSection from "./Contact";
import TeamSection from "../Pages/OurTeam";
import FAQ from "./FAQ";

const BusinessPage = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-white text-gray-800">
            {/* Awards & Recognition */}
            {/* <AwardPage /> */}
            <VisionMission/>
            


            {/* Team Section */}
            {/* <TeamSection/> */}
            <ContactSection/>
            <FAQ/>
        </div>
    );
};

export default BusinessPage;
