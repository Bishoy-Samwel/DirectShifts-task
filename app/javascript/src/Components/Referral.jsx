import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, referredList } from "../selectors";
import { Button } from "@mui/material";
import { getReferredList } from "../redux/reducers/referral";
import { ReferEmail } from './ReferEmail';

const Referral = () => {
  const dispatch = useDispatch()
  const user = useSelector(currentUser)
  const referredListState = useSelector(referredList)
  const [copySuccess, setCopySuccess] = useState('');
  useEffect(() => { dispatch(getReferredList()) }, [referredList])
  const copyToClipBoard = async copyMe => {

    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };
  const referral_link = `http://localhost:3000/ref:${user.referral_code}`
  return (
    <div >
      Refer people you know :)
      <hr />
      <ReferEmail referral_link={referral_link}/>
      <hr />
     
      Share your personal referral link:
      <strong id="referral_link">
        {referral_link}
      </strong>
      <Button onClick={() => copyToClipBoard(referral_link)}>
        Click here to copy
      </Button>
      {copySuccess}
      <hr />
      {
        (referredListState.length > 0) ?
          referredListState.map((member) => (
            <p>Email: {member.email}, status: {member.status}</p>
          )) : <></>
      }
    </div>
  );
}

export default Referral; 