import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-11/12 mx-auto space-y-10 mt-10">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <img className="w-4/5" src={'https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?w=740&t=st=1699166850~exp=1699167450~hmac=28184df93341b0a3f372c883fc48ab2eb00a16b02455b858325665f3c404c667'} alt="" />
                    </div>
                    <div >
                        <h1 className="text-end text-4xl font-bold">ABOUT <span className="text-[#FF6C22]">US</span></h1>
                        <hr />
                        <p className="text-justify font-bold">We like to avail the opportunity to introduce ourselves as one of the premier and leading Fire Detection & Protection System Consultancy (Residential, commercial & industrial), Inspection (Pre-shipment & Post-Landing), Survey and Valuation of Asset organization in Bangladesh. We are working in this line for and near about 29 years as well-known Pre-Shipment / Post-Landing Inspection Agent, Surveyor and fire consultant. We are enlisted by Bangladesh Fire Service & Civil Defence for fire consultancy, Department of Inspection for Factories and establishments for fire & electrical consultancy and also enlisted by Sonali Bank Ltd, Agrani Bank Ltd, Janata Bank Ltd, Bangladesh Development Bank Ltd, Bangladesh Krishi Bank Ltd for Inspection (Pre-Shipment & Post-Landing) and survey of imported capital machineries. Our processes and services are solely maintained by ISO 9001:2015. We maintain the drawing in accordance with BNBC, NFPA & FSCD and international standards.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center">
                    <div>
                        <h1 className="text-end text-4xl font-bold"><span className="text-[#FF6C22]">OUR</span> MISSION</h1>
                        <hr />
                        <ul className="list-disc pl-8 font-bold">
                            <li>To prevent fire accidents in the working place by reducing the fire hazard to minimum.</li>
                            <li>To eliminate fire accident caused work stoppage & lost production.</li>
                            <li>To prevent loss of life and permanent disability of worker by eliminating causes of fire accidents.</li>
                            <li>To evaluate employee’s confidence by prompting safe work place and good working condition.</li>
                            <li>To create awareness among employees of the organization by proving fire safety training.</li>
                            <li>To conduct Pre-shipment & Post-shipment inspection work with strict conformity to international standard.</li>
                        </ul>
                    </div>
                    <div>
                        <img className="w-4/5" src={'https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?w=740&t=st=1699168368~exp=1699168968~hmac=9279537984fdefd0421229c9c3512b92b471f22b2059ebcbd4c977822d128673'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;