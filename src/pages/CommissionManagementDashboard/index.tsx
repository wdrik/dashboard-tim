import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { SelectChangeEvent } from '@mui/material/Select';

import CardWrapper from '../../components/CardWrapper';
import CustomChart from '../../components/CustomChart';
import MultiSelect from '../../components/MultiSelect';
import CustomDatePicker from '../../components/CustomDatePicker';
import TableGrid from '../../components/TableGrid';
import RadarChart from '../../components/RadarChart';

import { ICommissioningManagement, IHeader } from '../../@types/types';
import { useFetch } from '../../hooks/useFetch';

type IForm = {
  date: Date | null;
  product: string[];
  typeOfCommission: string[];
  economicGroup: string[];
  regional: string[];
};

const headers: IHeader[] = [
  {
    label: 'INDICADOR',
    align: 'left',
  },
  {
    label: 'Jan',
    align: 'right',
  },
  {
    label: 'Fev',
    align: 'right',
  },
  {
    label: 'Mar',
    align: 'right',
  },
  {
    label: 'Abr',
    align: 'right',
  },
];

const rows = [
  {
    name: 'Frozen yoghurt1',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: 'Frozen yoghurt2',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: 'Frozen yoghurt3',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: 'Frozen yoghurt4',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
];

function CommissionDashboardManagement() {
  const { data: commissioningManagement } = useFetch<
    ICommissioningManagement[]
  >('/ds_comissionamento_gestao');

  const [form, setForm] = useState<IForm>({
    date: new Date(),
    product: [],
    typeOfCommission: [],
    economicGroup: [],
    regional: [],
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
        <Grid item xs={3}>
          <CustomChart />
        </Grid>

        <Grid item xs={3}>
          <CustomChart />
        </Grid>

        <Grid item xs={3}>
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
              tag="Grupo Economico"
              options={['Omar Alexander', 'Carlos Abbott', 'Miriam Wagner']}
              name="economicGroup"
              inputValue={form.economicGroup}
              handleChange={handleChange}
            />

            <MultiSelect
              tag="Regional"
              options={['Omar Alexander', 'Carlos Abbott', 'Miriam Wagner']}
              name="regional"
              inputValue={form.regional}
              handleChange={handleChange}
            />

            <Button variant="contained" size="small" type="submit">
              Filtrar
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} my={1}>
        <Grid item xs={9}>
          <TableGrid headers={headers} rows={rows} />
        </Grid>

        <Grid item xs={3}>
          <RadarChart />
        </Grid>
      </Grid>
    </>
  );
}

export default CommissionDashboardManagement;
