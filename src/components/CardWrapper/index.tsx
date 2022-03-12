import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/system/Box';
import PaidIcon from '@mui/icons-material/Paid';
import CardContent from '@mui/material/CardContent';

interface CardWrapperProps {
  title: string;
}

function CardWrapper(props: CardWrapperProps) {
  return (
    <Card variant="outlined">
      <CardContent style={{ padding: '6px' }}>
        <Typography align="center" component="p">
          {props.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PaidIcon />
          <Typography component="span">R$ 295.900,00</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Typography component="span">15%</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardWrapper;
