import Grid from '@mui/material/Grid';

import CardWrapper from '../../components/CardWrapper';

function CommissionDashboardManagement() {
  return (
    <>
      <Grid container spacing={2} my={1}>
        <Grid item xs={3}>
          <CardWrapper title="Comissão Bruta" />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper title="Total Estornos" />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper title="Comissão Paga" />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper title="Total Saldo Negativo" />
        </Grid>
      </Grid>

      <Grid container spacing={2} my={1}>
        <Grid item xs={5}>
          <CustomChart />
        </Grid>
      </Grid>
    </>
  );
}

export default CommissionDashboardManagement;
