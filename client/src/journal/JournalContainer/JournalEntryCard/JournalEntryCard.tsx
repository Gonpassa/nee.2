import { FC } from 'react';
import { IEntry } from '../../../queries/types/journal';
import { Card, CardActions, CardContent, Chip, IconButton, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { card } from './styles';
import { SlideDirection } from '../types';

interface JournalEntryCardProps {
  entry: IEntry;
  slideDirection: SlideDirection;
}

export const JournalEntryCard: FC<JournalEntryCardProps> = ({ entry, slideDirection }) => {
  return (
    <Card
      variant="outlined"
      css={card}
      className={slideDirection === SlideDirection.LEFT ? 'slide_from_left' : 'slide_from_right'}
    >
      <CardContent>
        <div>
          <Typography variant="h5">{entry.title}</Typography>
          <Chip label={`${entry.month}-${entry.day}-${entry.year}`} color="secondary" />
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit entry">
          <EditOutlinedIcon color="info" />
        </IconButton>
        <IconButton>
          <DeleteOutlineOutlinedIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
