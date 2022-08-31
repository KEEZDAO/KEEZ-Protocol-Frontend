import { GiFountainPen, GiVote, GiLightBulb } from "react-icons/gi";

const Features = () => {
  return (
    <div className="flex py-20 justify-center items-center px-5 lg:px-20 md:px-20 ">
        <div className="flex-column w-[90%] ">
            <h1 className="text-4xl md:text-3xl text-center textShadow  text-white">Features</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 w-full">
                <div className="flex flex-col justify-start items-center text-base text-center bg-white p-10 lg:pt-16 text-black rounded-3xl drop-shadow-lg">
                    <div className="rounded-full bg-[black] p-2 drop-shadow-lg">
                        <GiFountainPen color="white" fontSize="4em"/>
                    </div>
                    
                    <h1 className="text-xl text-center font-semibold pb-5 pt-2 text-black">Create a DAO</h1>
                    Through our DAO creation process, a Universal Profile (UP) can
                    create an UP for a DAO, onboard members, govern the operation, 
                    and manage the treasury and data through a multisig.
                </div>

                <div className="flex flex-col justify-start text-center items-center text-base bg-white p-10 text-black rounded-3xl drop-shadow-lg">
                    <div className="rounded-full bg-[black] p-2 drop-shadow-lg">
                        <GiLightBulb color="white" fontSize="4em"/>
                    </div>
                    <h1 className="text-xl text-center font-semibold pb-5 pt-2 text-black">Propose</h1>
                    DAOs can onboard members and provide them permissions. One of 
                    those permissions includes the ability to create proposals 
                    for the DAO they are a member of. On the DAOs Profile Page, 
                    a member with the Propose Permission can create proposals 
                    using any of our proposal templates. 
                </div>

                <div className="flex flex-col justify-start items-center text-center text-base bg-white p-10 lg:pt-16 text-black rounded-3xl drop-shadow-lg">
                    <div className="rounded-full bg-[black] p-2 drop-shadow-lg">
                        <GiVote color="white" fontSize="4em"/>
                    </div>
                    <h1 className="text-xl text-center font-semibold pb-5 pt-2 text-black">Vote</h1>
                    Another permission available to members is voting. Any DAO 
                    members with the Vote Permissions can view proposals on the 
                    DAO Profile Page and submit their vote. 
                </div>
            </div>
        </div>
      {/* <div className="flex-column w-[90%] ">
        <div className="flex flex-col md:flex-row gap-4 flex-initial justify-between py-0">
          <div className="flex-column md:w-1/2 text-white">
            <h1 className="text-4xl 2xl:text-7xl md:text-5xl text-white py-2 ">
              Create a DAO, propose & vote within the{" "}
              <h1 className="font-bold flex-row inline">LUKSO</h1>{" "}
              <h1 className="flex-column inline">ecosystem</h1>
            </h1> */}
            
            
          {/* </div>

          <div
            className="bg-transparent w-1/2  h-36 py-2
                    2xl:min-w-[550px]
                    2xl:max-w-[600px]
                    sm:min-w-[270px]
                    sm:max-w-[300px]
                    min-w-full
                    flex-col p-3 rounded-md"
          >
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Features;
