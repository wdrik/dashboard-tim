import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PartnerInfoProps {
  partnerName: string;
  classification: string;
}

function PartnerInfo(props: PartnerInfoProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Typography variant="h6">{props.partnerName}</Typography>
      <Typography variant="subtitle1">{props.classification}</Typography>
    </Box>
  );
}

export default PartnerInfo;
