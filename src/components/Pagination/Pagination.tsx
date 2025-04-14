import { ChangeEvent, FC } from 'react';

import {
  Stack,
  Pagination,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface PaginationComponentProps {
  totalPages: number;
  page: number;
  limit: number;
  handleLimitChange: (event: SelectChangeEvent) => void;
  handlePageChange: (event: ChangeEvent<unknown>, value: number) => void;
}

export const PaginationComponent: FC<PaginationComponentProps> = ({
  totalPages,
  limit,
  page,
  handleLimitChange,
  handlePageChange,
}) => {
  return (
    <Stack
      spacing={2}
      direction={'row'}
      justifyContent='right'
      sx={{ paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          labelId='records-select-label'
          value={limit.toString()}
          onChange={handleLimitChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
      </FormControl>
      <Pagination
        count={totalPages}
        page={page}
        color='primary'
        onChange={handlePageChange}
        size='large'
      />
    </Stack>
  );
};
