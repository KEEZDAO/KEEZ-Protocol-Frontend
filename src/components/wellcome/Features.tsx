import { GiFountainPen, GiVote, GiLightBulb } from "react-icons/gi";

const Features = () => {
  return (
    <div className="flex py-20 justify-center items-center px-5 lg:px-20 md:px-20 ">
        <div className="flex-column w-[90%] ">
            <h1 className="text-4xl md:text-3xl text-center font-semibold text-white">FEATURES</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 w-full">
                <div className="flex flex-col justify-center items-center text-base bg-gradient-to-b from-blue-300 via-purple-500 to-yellow-500 p-10 text-white rounded-3xl drop-shadow-lg">
                    <div className="rounded-full bg-[#FC1E9A] p-2 drop-shadow-lg">
                        <GiFountainPen color="white" fontSize="2em"/>
                    </div>
                    
                    <h1 className="text-xl text-center font-semibold pb-5 pt-2 text-white">Create a DAO</h1>
                    The power of KEEZ DAO unlocks the KEEZ Protocol. This platform
                    allows individuals to create a DAO and distribute permissions to
                    members. The permissions can enable members to vote, propose,
                    delegate, add/revoke permissions, and access the vaults and
                    multisig of the DAO. The mission of this protocol is to
                    revolutionize DAO governance models and step away from traditional
                    token gating.
                </div>

                <div className="flex flex-col justify-center items-center text-base bg-gradient-to-b from-blue-300 via-purple-500 to-yellow-500 p-10 text-white rounded-3xl drop-shadow-lg">
                    <div className="rounded-full bg-[#FC1E9A] p-2 drop-shadow-lg">
                        <GiLightBulb color="white" fontSize="2em"/>
                    </div>
                    <h1 className="text-xl text-center font-semibold pb-5 pt-2 text-white">Propose</h1>
                    The power of KEEZ DAO unlocks the KEEZ Protocol. This platform
                    allows individuals to create a DAO and distribute permissions to
                    members. The permissions can enable members to vote, propose,
                    delegate, add/revoke permissions, and access the vaults and
                    multisig of the DAO. The mission of this protocol is to
                    revolutionize DAO governance models and step away from traditional
                    token gating.
                </div>

                <div className="flex flex-col justify-center items-center text-base bg-gradient-to-b from-blue-300 via-purple-500 to-yellow-500 p-10 text-white rounded-3xl drop-shadow-lg">
                    <div className="rounded-full bg-[#FC1E9A] p-2 drop-shadow-lg">
                        <GiVote color="white" fontSize="2em"/>
                    </div>
                    <h1 className="text-xl text-center font-semibold pb-5 pt-2 text-white">Vote</h1>
                    The power of KEEZ DAO unlocks the KEEZ Protocol. This platform
                    allows individuals to create a DAO and distribute permissions to
                    members. The permissions can enable members to vote, propose,
                    delegate, add/revoke permissions, and access the vaults and
                    multisig of the DAO. The mission of this protocol is to
                    revolutionize DAO governance models and step away from traditional
                    token gating.
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