import Grid from '@mui/material/Grid';

import CardWrapper from '../../components/CardWrapper';
import HorizontalBarChart from '../../components/HorizontalBarChart';
import CustomChart from '../../components/CustomChart';
import RadarChart from '../../components/RadarChart';
import DoughnutChart from '../../components/DoughnutChart';
import PartnerInfo from '../../components/PartnerInfo';

import { useFetch } from '../../hooks/useFetch';

type Repository = {
  full_name: string;
};

function CommissionDashboard() {
  // const { data: repositories, isFetching } =
  //   useFetch<Repository[]>('users/wdrik/repos');

  return (
    <Grid container spacing={2} my={1}>
      <Grid item xs={3}>
        <CardWrapper title="Comissão" />
      </Grid>

      <Grid item xs={3}>
        <CardWrapper title="Total Estornos" />
      </Grid>

      <Grid item xs={3}>
        <CardWrapper title="Comissão a Receber" />
      </Grid>

      <Grid item xs={3}>
        <PartnerInfo
          partnerName="Nome do Parceiro"
          classification="Classificação"
        />
      </Grid>

      <Grid item xs={4}>
        <CustomChart />
      </Grid>

      <Grid item xs={3}>
        <CustomChart />
      </Grid>

      <Grid item xs={2}>
        <RadarChart />
      </Grid>

      <Grid item xs={4}>
        <HorizontalBarChart />
      </Grid>

      <Grid item xs={3}>
        <CustomChart />
      </Grid>

      <Grid item xs={2}>
        <DoughnutChart />
      </Grid>
    </Grid>
  );
}

export default CommissionDashboard;
