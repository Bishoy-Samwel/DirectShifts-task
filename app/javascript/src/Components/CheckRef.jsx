import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const CheckRef = () => {
  const params = useParams(); 
  const setReferral= (referralCode) => {
    localStorage.setItem("referralCode", referralCode);
  };
  useEffect(() => {
    setReferral(params.ref.slice(4))
 }, []);
}

export default CheckRef;