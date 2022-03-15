import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/system/Box';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';

import { ReactComponent as ArrowGreen } from '../../assets/images/arrow-green.svg';
interface CardWrapperProps {
  title: string;
  value?: number;
  percentage?: number;
  iconName?: string;
}

function CardWrapper({
  title,
  value = 0,
  percentage = 0,
  iconName,
}: CardWrapperProps) {
  return (
    <Card variant="outlined">
      <CardContent style={{ padding: '6px' }}>
        <Typography align="center" component="p">
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ marginRight: '8px' }}>{iconName}</Icon>

          <Typography component="span" color="#1565c0">
            {value.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              marginRight: '4px',
              transform: value < 0 ? 'rotate(-180deg)' : '',
            }}
          >
            <ArrowGreen />
          </Box>

          <Typography component="span">{`${percentage}%`}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardWrapper;
