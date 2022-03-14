import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SelectChangeEvent } from '@mui/material/Select';

import CardWrapper from '../../components/CardWrapper';
import CustomChart from '../../components/CustomChart';
import PartnerInfo from '../../components/PartnerInfo';
import MultiSelect from '../../components/MultiSelect';
import CustomDatePicker from '../../components/CustomDatePicker';
import HorizontalBarChart from '../../components/HorizontalBarChart';
import DoughnutChart from '../../components/DoughnutChart';

import { IPartnerContestation } from '../../@types/types';
import { useFetch } from '../../hooks/useFetch';

type IForm = {
  date: Date | null;
  product: string[];
  typeOfCommission: string[];
  custcode: string[];
};

function RefundDashboard() {
  const { data: partnerContestation } = useFetch<IPartnerContestation[]>(
    '/ds_contestacao_parceiro'
  );

  const [form, setForm] = useState<IForm>({
    date: new Date(),
    product: [],
    typeOfCommission: [],
    custcode: [],
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
    <>
      <Grid container spacing={2} my={1}>
        <Grid item xs={3}>
          <CardWrapper title="Reembolso" />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper title="Total Price Back" />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper title="Reembolso a Receber" />
        </Grid>

        <Grid item xs={3}>
          <PartnerInfo
            partnerName="Nome do Parceiro"
            classification="Classificação"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} my={1}>
        <Grid item xs={5}>
          <CustomChart />
        </Grid>

        <Grid item xs={4}>
          <CustomChart />
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
              options={[
                'Bradley Wilkerson',
                'Virginia Andrews',
                'Kelly Snyder',
              ]}
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
      </Grid>

      <Grid container spacing={2} my={1}>
        <Grid item xs={4}>
          <HorizontalBarChart />
        </Grid>

        <Grid item xs={4}>
          <HorizontalBarChart />
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
    </>
  );
}

export default RefundDashboard;
