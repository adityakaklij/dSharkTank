import { ethers } from "ethers";
import React, { useState } from "react";
import { contractABI, contractAddress } from "../Constants/Constants";
import * as PushAPI from "@pushprotocol/restapi";
import { Chat } from "@pushprotocol/uiweb";



function Cards({ Name, Desc, Date, Img, projectId, projectVotes }) {
  const [chatBtn, setChatBtn] = useState(false);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const voteProjectFun = async () => {
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    // console.log("projectId", projectId)

    try {
      const voteProjectTx = await contractInstance.voteProject(projectId);
      await voteProjectTx.wait();
      window.alert("Successfully Voted");
    } catch (error) {
      window.alert(error);


  //   return (
  //     <>
  //         <h2>Push Chat test</h2>
  //                     <Chat
  //                     // account={account} //user address
  //                     account= "0x88Ab2b62ccBD5170AA4D7266C0D5d7D002689fEf" //user address
  //                     supportAddress="0xc221979949e0ACc4E1E715FbB232284f7eE412d4" //support address
  //                     // apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
  //                     apiKey="vzOQa8Hda3.lD6Yvrij1T4qHrE07Mp7XcE3mRWu8Yl6WAmOzLSfI63xWuGSoNkXsHeBDVvG63Hs"
  //                         env="staging"
  //         />

  //     </>
  //   )

  // }
 
  return chatBtn?((
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={Img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text">{Desc}</p>
          <p>{Date}</p>
          <p>{`Votes:- ${projectVotes}`}</p>
          <button onClick={voteProjectFun} className="btn btn-primary">
            Vote Project
          </button>
          <button  className="btn btn-primary">
            Chat
          </button>
        </div>
      </div>

    
                        <Chat
                        // account={account} //user address 
                        account= "0x88Ab2b62ccBD5170AA4D7266C0D5d7D002689fEf" //user address 
                        supportAddress="0xc221979949e0ACc4E1E715FbB232284f7eE412d4" //support address
                        // apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
                        apiKey="vzOQa8Hda3.lD6Yvrij1T4qHrE07Mp7XcE3mRWu8Yl6WAmOzLSfI63xWuGSoNkXsHeBDVvG63Hs"
                            env="staging" />
    
            
            
        </>
      )

    }


  return (
    <>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={Img} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{Name}</h5>
            <p className="card-text">{Desc}</p>
            <p>{Date}</p>
            <p>{`Votes:- ${projectVotes}`}</p>
            <button onClick={voteProjectFun} className="btn btn-primary">Vote Project</button>
            <button onClick={chatWithOwner} className="btn btn-primary">Chat</button>
          </div>
        </div>
      </div>
 
  </>);
 
}

export default Cards;
