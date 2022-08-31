import React, { useContext, useState, useEffect } from "react";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { CreateProposalContext } from "../../context/CreateProposalContext";
import { ProfileContext } from "../../context/ProfileContext";

const ChooseTemplate = (props: { handleComponent: any }) => {
  const { handleComponent } = props;
  const { setProposer, setProposalType, daoCid } = useContext(
    CreateProposalContext
  );

  const { accountAddress } = useContext(ProfileContext);
  const [templateSelected, setTemplateSelected] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent, templateId: number) => {
    event.preventDefault();
    // console.log(daoCid);

    setProposer(accountAddress);
    switch (templateId) {
      case 0:
        handleComponent("VotingTemplate");
        setProposalType("Voting");
        break;
      case 1:
        handleComponent("DaoTransferTokenTemplate");
        setProposalType("Token Transfer");
        break;
      case 2:
        handleComponent("PermissionTemplate");
        setProposalType("Permission");
        break;
      case 3:
        handleComponent("GeneralTemplate");
        setProposalType("General");
        break;
    }
  };

  const handleBack = async (event: React.FormEvent) => {
    event.preventDefault();
    handleComponent("ChooseDao");
  };

  const handleTemplateSelection = async (
    event: React.FormEvent,
    id: number
  ) => {
    event.preventDefault();
    setTemplateSelected(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-other pt-10  min-h-[100vh] w-full px-5 md:px-[15%]">
      {/* <h1 className="text-white text-lg py-2">Step 1</h1> */}
      <form onSubmit={(event) => handleSubmit(event, templateSelected)}>
        <div className="py-2 ">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-4xl ">
              Select a Proposal Template
            </h1>
            <button
              type="button"
              onClick={(event) => handleBack(event)}
              className="flex justify-center rounded-full item-center 
                        border border-transparent shadow-sm px-4 py-2 bg-[#6341ff]
                        text-base font-medium text-white hover:bg-[#8168ff] 
                        sm:w-auto sm:text-sm"
            >
              <MdOutlineNavigateBefore
                className="-translate-x-1.5 w-6"
                color="#fff"
                fontSize={20}
              />
              <p className="-translate-x-1.5">Back</p>
            </button>
          </div>

          <label
            className="block text-white text-lg pb-4 font-normal"
            htmlFor="daoName"
          >
            
          </label>
          <div className="grid gap-4 xl:grid-cols-2 md:grid-cols-1 text-white m-5 md:mx-20">
            <div
              onClick={(event) => handleTemplateSelection(event, 0)}
              className={`flex-col justify-start p-6 cursor-pointer rounded-lg items-center hover:bg-[#8168ff] bg-[#292d46] ${
                templateSelected === 0
                  ? "outline outline-offset-2 outline-4 outline-white"
                  : ""
              }`}
            >
              <p className="text-xl text-center font-bold">
                Voting Parameters Template
              </p>
              <p className="text-sm text-light text-center py-5">
              This template is for proposing changes to the default voting
              parameters that were established during DAO creation. These
              proposals are executable after the voting period and 
              execution delay ends.
              </p>
            </div>
            <div
              onClick={(event) => handleTemplateSelection(event, 1)}
              className={`flex-col justify-start p-6 cursor-pointer rounded-lg items-center hover:bg-[#8168ff] bg-[#292d46] ${
                templateSelected === 1
                  ? "outline outline-offset-2 outline-4 bg-[#8168ff] outline-white"
                  : ""
              }`}
            >
              <p className="text-xl text-center font-bold">
                Send Tokens From DAO Template
              </p>
              <p className="text-sm text-light text-center py-5">
              This proposal template is for sending tokens from the DAO’s vault 
              to another address. This template may be used to relocate 
              tokens from one vault to another or from one vault to an 
              individual's UP. These proposals are executable after the 
              voting period and execution delay ends
              </p>
            </div>
            <div
              onClick={(event) => handleTemplateSelection(event, 2)}
              className={`flex-col justify-start p-6 cursor-pointer rounded-lg items-center hover:bg-[#8168ff] bg-[#292d46] ${
                templateSelected === 2
                  ? "outline outline-offset-2 outline-4 outline-white"
                  : ""
              }`}
            >
              <p className="text-xl text-center font-bold">
                Add & Revoke Permissions Template
              </p>
              <p className="text-sm text-light text-center py-5">
              This proposal template is for adding or revoking  permissions 
              of a DAO member's UP. This can be used to add new members to 
              the DAO or remove current members permission. These proposals 
              are executable after the voting period and execution delay 
              ends.
              </p>
            </div>
            <div
              onClick={(event) => handleTemplateSelection(event, 3)}
              className={`flex-col justify-start p-6 cursor-pointer rounded-lg items-center hover:bg-[#8168ff] bg-[#292d46] ${
                templateSelected === 3
                  ? "outline outline-offset-2 outline-4 outline-white"
                  : ""
              }`}
            >
              <p className="text-xl text-center font-bold">
                General Template
              </p>
              <p className="text-sm text-light text-center py-5">
              This proposal template is for creating a custom proposal. 
              Results will be given but these proposals do not have an 
              execution smart contract.
              </p>
            </div>
          </div>

          <div className="flex justify-end items-center">
            <button
              type="submit"
              className="flex justify-center rounded-full item-center mb-4 mt-4
                        border border-transparent shadow-sm px-4 py-2 bg-[#6341ff]
                        text-base font-medium text-white hover:bg-[#8168ff] 
                        sm:w-auto sm:text-sm"
            >
              <p className="translate-x-1.5">Next</p>
              <MdNavigateNext
                className="translate-x-1.5 w-6"
                color="#fff"
                fontSize={20}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChooseTemplate;
