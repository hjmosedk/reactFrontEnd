import { FC, useState } from 'react';
import Dinero from 'dinero.js';

import { useUpdateProductStatusMutation } from '../../services/productsService';
import { NormalizedApiResponse } from '../../services/productsService';

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

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

interface ProductTableProps {
  Products: NormalizedApiResponse;
  setRefetchAllProducts: (value: boolean) => void;
}

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const imagePath = import.meta.env.VITE_IMAGE_PATH;
const imageUrl = `${baseUrl}${imagePath}`;

export const ProductTable: FC<ProductTableProps> = ({
  Products: { productsList },
  setRefetchAllProducts,
}) => {
  const [loadingState, setLoadingState] = useState(false);
  const [updateProductStatus] = useUpdateProductStatusMutation();

  const handleEdit = (id: number) => {
    console.log(`Edit product with id: ${id}`);
  };

  const handlePublish = async (id: number) => {
    setLoadingState(true);
    setRefetchAllProducts(true);
    try {
      await updateProductStatus(id).unwrap();
      setLoadingState(false);
    } catch (error) {
      console.error(`Failed to update product status for id: ${id}`, error);
      setLoadingState(false);
    }
  };

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
            <StyleTableCell>On Sale?</StyleTableCell>
            <StyleTableCell>Edit</StyleTableCell>
            <StyleTableCell>Public</StyleTableCell>
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
                <Button
                  color='secondary'
                  variant='contained'
                  onClick={() => handleEdit(id)}
                >
                  Edit
                </Button>
              </StyleTableCell>
              <StyleTableCell align='right'>
                {productsList.productList[id].isPublic ? (
                  <Button
                    color='warning'
                    variant='contained'
                    onClick={() => handlePublish(id)}
                  >
                    {loadingState ? <LoadingSpinner /> : 'Unpublish'}
                  </Button>
                ) : (
                  <Button
                    color='success'
                    variant='contained'
                    onClick={() => handlePublish(id)}
                  >
                    {loadingState ? <LoadingSpinner /> : 'Publish'}
                  </Button>
                )}
              </StyleTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
