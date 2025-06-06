import { FC } from 'react';
import { Ecommerce } from 'ckh-typings';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@mui/material';

import Dinero from 'dinero.js';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const imagePath = import.meta.env.VITE_IMAGE_PATH;
const imageUrl = `${baseUrl}${imagePath}`;

interface AllProductsPageProps {
  product: Ecommerce.ProductModel;
  onClick: () => void;
  singlePage: boolean;
}

export const ProductCard: FC<AllProductsPageProps> = ({
  product,
  onClick,
  singlePage,
}) => {
  return (
    <>
      <Card
        elevation={singlePage ? 0 : 3}
        sx={{
          height: singlePage ? '1000px' : '400px',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          paddingTop: singlePage ? '2rem' : undefined,
          paddingLeft: singlePage ? '12rem' : undefined,
          paddingRight: singlePage ? '12rem' : undefined,
        }}
      >
        <CardMedia
          component='img'
          alt={`image of ${product.name}`}
          image={`${imageUrl}${product.image}`}
          sx={{
            flex: 3,
            height: 0,
            objectFit: singlePage ? 'scale-down' : 'cover',
          }}
          loading='lazy'
        />
        <CardContent>
          <Box
            sx={{
              flex: 3,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              sx={{
                paddingTop: 0,
                textAlign: 'center',
              }} // Center the text
            >
              {product.name}
              {product.onSale && (
                <Typography
                  variant='body2'
                  color='warning.main'
                  sx={{
                    fontWeight: 700,
                    textAlign: 'center',
                    marginBottom: 1,
                  }}
                >
                  Save {product.percentage} %!
                </Typography>
              )}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'center',
              }}
            >
              {product.description}
            </Typography>
            <Typography
              variant='body1'
              sx={(theme) => ({
                color: product.onSale
                  ? theme.palette.warning.main
                  : theme.palette.text.primary,
                fontWeight: 700,
                backgroundColor: product.onSale
                  ? theme.palette.secondary.light
                  : theme.palette.background.default,
                borderRadius: theme.shape.borderRadius,
                textAlign: 'center',
                marginTop: theme.spacing(1),
              })}
            >
              Price:{' '}
              {Dinero({
                amount: product.price,
                currency: product.currency,
              }).toFormat()}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            flex: 1,
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button size='small' color='primary' variant='contained'>
            Add to Cart
          </Button>
          {singlePage && (
            <Button size='small' color='info' variant='contained'>
              {' '}
              Write Review
            </Button>
          )}
          <Button
            size='small'
            color='secondary'
            variant='contained'
            onClick={() => onClick()}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
