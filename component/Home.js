import React,{useEffect} from 'react';
import { makeStyles, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from 'react-redux'
import loadUsers from '../redux/actions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  // const userStyles=makeStyles({
  //   table:{
  //       minWidth:900,
  //       marginTop:100
  //   }
  // })
  console.log('hello g')
const Home = () => {
 let dispatch=useDispatch()
// const { users }=useSelector((state)=>state.data)
 useEffect(() => {
  dispatch(loadUsers())
 }, [])
    // const clasess=userStyles() 
    return (

        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name </StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Adress</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
           </TableRow>
        </TableHead>
        {/* <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.Email}</StyledTableCell>
              <StyledTableCell align="center">{user.Contact}</StyledTableCell>
              <StyledTableCell align="center">{user.Adress}</StyledTableCell>
              <StyledTableCell align="center">{user.Action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
        </>
    )
}

export default Home;