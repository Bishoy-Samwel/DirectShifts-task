import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, referredList } from "../selectors";
import { Button } from "@mui/material";
import { getReferredList } from "../redux/reducers/referral";
import { ReferEmail } from './ReferEmail';
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Div = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const Referral = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
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
    <Div >
      <Div>{" Refer people you know :)"}</Div>

      <hr />
      <ReferEmail referral_link={referral_link} />
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
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {referredListState.map((member) => (
            <TableRow
              key={member.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {member.email}
              </TableCell>
              <TableCell align="right">{member.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Div>
  );
}

export default Referral; 