import Grid from '@mui/material/Grid';

import CardWrapper from '../../components/CardWrapper';

function RefundDashboard() {
  return (
    <Grid container spacing={2} my={1}>
      <Grid item xs={3}>
        <CardWrapper title="Comissão" />
      </Grid>
    </Grid>
  );
}

export default RefundDashboard;
