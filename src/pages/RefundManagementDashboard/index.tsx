import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { SelectChangeEvent } from '@mui/material/Select';

import CardWrapper from '../../components/CardWrapper';
import CustomChart from '../../components/CustomChart';
import HorizontalBarChart from '../../components/HorizontalBarChart';
import Box from '@mui/material/Box';
import CustomDatePicker from '../../components/CustomDatePicker';
import MultiSelect from '../../components/MultiSelect';
import Button from '@mui/material/Button';
import TableGrid from '../../components/TableGrid';
import { IHeader } from '../../@types/types';

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

function RefundManagementDashboard() {
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
          <CardWrapper title="Reembolso" />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper title="Total Price Back" />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper title="Reembolso a Receber" />
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
          <HorizontalBarChart />
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
        <Grid item xs={12}>
          <TableGrid headers={headers} rows={rows} />
        </Grid>
      </Grid>
    </>
  );
}

export default RefundManagementDashboard;
