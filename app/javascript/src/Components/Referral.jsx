import React, { useState } from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../selectors";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Referral = () => {

  const user = useSelector(currentUser)
  const [copySuccess, setCopySuccess] = useState('');

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

      Share your personal referral link:
      <strong id="referral_link">
        {referral_link}
      </strong>
      <Button onClick={() => copyToClipBoard(referral_link)}>
     Click here to copy
     </Button>
      {copySuccess}
    </div>
  );
}

export default Referral; 