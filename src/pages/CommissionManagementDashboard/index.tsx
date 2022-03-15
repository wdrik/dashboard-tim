import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Title from '../../components/Title';

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
    key: 'name',
  },
  {
    label: 'Jan',
    align: 'right',
    key: 'calories',
  },
  {
    label: 'Fev',
    align: 'right',
    key: 'fat',
  },
  {
    label: 'Mar',
    align: 'right',
    key: 'carbs',
  },
  {
    label: 'Abr',
    align: 'right',
    key: 'protein',
  },
];

const rows = [
  {
    id: 1,
    name: 'Frozen yoghurt1',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 2,
    name: 'Frozen yoghurt2',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 3,
    name: 'Frozen yoghurt3',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 4,
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

  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li onClick={() => navigate('/commission-dashboard')}>dashboard 01</li>
        <li onClick={() => navigate('/refund-dashboard')}>dashboard 02</li>
        <li onClick={() => navigate('/commission-management-dashboard')}>
          dashboard 03
        </li>
        <li onClick={() => navigate('/refund-management-dashboard')}>
          dashboard 04
        </li>
        <li onClick={() => navigate('/variable-compensation-dashboard')}>
          dashboard 05
        </li>
      </ul>

      <Grid container spacing={2} my={1}>
        <Grid item xs={3}>
          <CardWrapper
            title="Comissão Bruta"
            value={295000}
            percentage={15}
            iconName="paid_icon"
          />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper
            title="Total Estornos"
            value={-11900}
            percentage={12}
            iconName="restore_icon"
          />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper
            title="Comissão Paga"
            value={284000}
            percentage={4}
            iconName="account_balance_wallet_icon"
          />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper
            title="Total Saldo Negativo"
            value={284000}
            percentage={4}
            iconName="calculate_icon"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} my={1}>
        <Grid item xs={3}>
          <Title title="Comissão Mensal (em Mil)" />
          <CustomChart />
        </Grid>

        <Grid item xs={3}>
          <Title title="Produtividade por Produto" />
          <CustomChart />
        </Grid>

        <Grid item xs={3}>
          <Title title="Mix Produtos (Volume)" />
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
          <Title title="Indicador de Qualidade" />
          <RadarChart />
        </Grid>
      </Grid>
    </>
  );
}

export default CommissionDashboardManagement;
