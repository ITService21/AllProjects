import ClientCard from "./ClientCard"; 
import clients from "../Data/OurClient";


function AboutClient() {
    return (
        <section className="bg-[#f5efe3] py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Our Esteemed Clients */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Esteemed Clients</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {clients.map((client, index) => (
                            <ClientCard
                                key={index}
                                imageSrc={client.imageSrc}
                                clientName={client.clientName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutClient;
