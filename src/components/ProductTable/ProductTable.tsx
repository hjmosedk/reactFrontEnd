import { FC } from 'react';
import Dinero from 'dinero.js';

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

import { RadioButtonUnchecked, CheckCircleOutline } from '@mui/icons-material';

import { StyleTableCell, StyledTableRow } from './Components';

import { NormalizedApiResponse } from '../../services/productsService';

interface ProductTableProps {
  Products: NormalizedApiResponse;
}

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const imagePath = import.meta.env.VITE_IMAGE_PATH;
const imageUrl = `${baseUrl}${imagePath}`;

export const ProductTable: FC<ProductTableProps> = ({
  Products: { productsList },
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 2, boxShadow: 4, borderRadius: 2, overflow: 'hidden' }}
    >
      <Table aria-label='product table'>
        <TableHead>
          <TableRow>
            <StyleTableCell>SKU</StyleTableCell>
            <StyleTableCell>Name</StyleTableCell>
            <StyleTableCell>Description</StyleTableCell>
            <StyleTableCell>Category</StyleTableCell>
            <StyleTableCell>Price</StyleTableCell>
            <StyleTableCell>Quantity</StyleTableCell>
            <StyleTableCell>Image</StyleTableCell>
            <StyleTableCell>Percentage</StyleTableCell>
            <StyleTableCell>OnSale</StyleTableCell>
            <StyleTableCell>Edit</StyleTableCell>
            <StyleTableCell>Inactive</StyleTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsList.id.map((id) => (
            <StyledTableRow
              key={id}
              sx={(theme) => ({
                '&:last-child td, &:last-child th': { border: 0 },
                '& > *': {
                  borderBottom: `2px solid ${theme.palette.divider}`,
                },
              })}
            >
              <StyleTableCell component='th' scope='row'>
                {productsList.productList[id].sku}
              </StyleTableCell>
              <StyleTableCell align='right'>
                {productsList.productList[id].name}
              </StyleTableCell>
              <StyleTableCell align='right'>
                {productsList.productList[id].description}
              </StyleTableCell>
              <StyleTableCell align='right'>
                {productsList.productList[id].category}
              </StyleTableCell>
              <StyleTableCell align='right'>
                {' '}
                {Dinero({
                  amount: productsList.productList[id].price,
                  currency: productsList.productList[id].currency,
                }).toFormat()}
              </StyleTableCell>
              <StyleTableCell align='right'>
                {productsList.productList[id].quantity}
              </StyleTableCell>
              <StyleTableCell align='right'>
                <img
                  src={`${imageUrl}${productsList.productList[id].image}`}
                  alt={`image of ${productsList.productList[id].description}`}
                  loading='lazy'
                  width='50px'
                  height='50px'
                />
              </StyleTableCell>
              <StyleTableCell align='right'>
                {productsList.productList[id].percentage} %
              </StyleTableCell>
              <StyleTableCell align='right'>
                {productsList.productList[id].onSale ? (
                  <CheckCircleOutline color='success' />
                ) : (
                  <RadioButtonUnchecked color='success' />
                )}
              </StyleTableCell>
              <StyleTableCell align='right'>
                <Button color='secondary' variant='contained'>
                  Edit
                </Button>
              </StyleTableCell>
              <StyleTableCell align='right'>
                <Button color='warning' variant='contained'>
                  Make Inactive
                </Button>
              </StyleTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
