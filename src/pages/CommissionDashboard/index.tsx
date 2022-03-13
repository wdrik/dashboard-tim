import { useState } from 'react';

import { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CardWrapper from '../../components/CardWrapper';
import HorizontalBarChart from '../../components/HorizontalBarChart';
import CustomChart from '../../components/CustomChart';
import RadarChart from '../../components/RadarChart';
import DoughnutChart from '../../components/DoughnutChart';
import PartnerInfo from '../../components/PartnerInfo';
import MultiSelect from '../../components/MultiSelect';
import CustomDatePicker from '../../components/CustomDatePicker';

import { useFetch } from '../../hooks/useFetch';
import { IPartnerContestation } from '../../@types';

type IForm = {
  product: string[];
  typeOfCommission: string[];
  custcode: string[];
  date: Date | null;
};

function CommissionDashboard() {
  const { data: partnerContestation } = useFetch<IPartnerContestation[]>(
    '/ds_contestacao_parceiro'
  );

  const [form, setForm] = useState<IForm>({
    product: [],
    typeOfCommission: [],
    custcode: [],
    date: new Date(),
  });

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value, name },
    } = event;

    setForm({
      ...form,
      [name]: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleDateChange = (newValue: Date | null) => {
    setForm({
      ...form,
      date: newValue,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('form submitted', form);
  };

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

      <Grid item xs={3}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <CustomDatePicker
            inputValue={form.date}
            handleChange={handleDateChange}
          />

          <MultiSelect
            tag="Produto"
            options={['Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder']}
            name="product"
            inputValue={form.product}
            handleChange={handleChange}
          />

          <MultiSelect
            tag="Tipo de Comissão"
            options={['Oliver Hansen', 'Van Henry', 'April Tucker']}
            name="typeOfCommission"
            inputValue={form.typeOfCommission}
            handleChange={handleChange}
          />

          <MultiSelect
            tag="Custcode"
            options={['Omar Alexander', 'Carlos Abbott', 'Miriam Wagner']}
            name="custcode"
            inputValue={form.custcode}
            handleChange={handleChange}
          />

          <Button variant="contained" size="small" type="submit">
            Filtrar
          </Button>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <HorizontalBarChart />
      </Grid>

      <Grid item xs={3}>
        <CustomChart />
      </Grid>

      <Grid item xs={2}>
        {partnerContestation && (
          <DoughnutChart
            labels={partnerContestation?.map((x) => x.status_contestacao)}
            data={partnerContestation?.map((x) => x.total_volume)}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default CommissionDashboard;
