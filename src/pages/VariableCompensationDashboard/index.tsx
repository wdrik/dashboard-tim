import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

import SimpleTableGrid from '../../components/SimpleTableGrid';
import CustomDatePicker from '../../components/CustomDatePicker';
import MultiSelect from '../../components/MultiSelect';

import { IHeader } from '../../@types/types';
import LineChart from '../../components/LineChart';
import { useNavigate } from 'react-router-dom';

type IForm = {
  date: Date | null;
  team: string[];
  store: string[];
  regional: string[];
};

const headers: IHeader[] = [
  {
    label: "KPI's",
    align: 'left',
    key: 'kpis',
  },
  {
    label: 'Meta',
    align: 'right',
    key: 'meta',
  },
  {
    label: 'Realizado Bruto',
    align: 'right',
    key: 'realizado_bruto',
  },
  {
    label: 'Atingimento',
    align: 'right',
    key: 'atingimento',
  },
  {
    label: 'Volume Qualidade',
    align: 'right',
    key: 'volume_qualidade',
  },
  {
    label: '%Deflator/ %Acelerador',
    align: 'right',
    key: 'deflator_acelerador',
  },
  {
    label: 'Realizado Liquido',
    align: 'right',
    key: 'realizado_liquido',
  },
  {
    label: 'Atingimento Final',
    align: 'right',
    key: 'atingimento_final',
  },
];

const rows = [
  {
    kpis: 'Frozen yoghurt1',
    meta: 152,
    realizado_bruto: 6.0,
    atingimento: 24,
    volume_qualidade: 4.1,
    deflator_acelerador: 4.1,
    realizado_liquido: 4.1,
    atingimento_final: 4.1,
  },
  {
    kpis: 'Frozen yoghurt2',
    meta: 159,
    realizado_bruto: 6.0,
    atingimento: 24,
    volume_qualidade: 4.2,
    deflator_acelerador: 4.2,
    realizado_liquido: 4.2,
    atingimento_final: 4.2,
  },
  {
    kpis: 'Frozen yoghurt3',
    meta: 144,
    realizado_bruto: 6.0,
    atingimento: 24,
    volume_qualidade: 4.0,
    deflator_acelerador: 4.0,
    realizado_liquido: 4.0,
    atingimento_final: 4.0,
  },
];

function VariableCompensationDashboard() {
  const [form, setForm] = useState<IForm>({
    date: new Date(),
    team: [],
    store: [],
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
        <li onClick={() => navigate('/commission-management-dashboard')}>
          dashboard 02
        </li>
        <li onClick={() => navigate('/refund-dashboard')}>dashboard 03</li>
        <li onClick={() => navigate('/refund-management-dashboard')}>
          dashboard 04
        </li>
        <li onClick={() => navigate('/variable-compensation-dashboard')}>
          dashboard 05
        </li>
      </ul>

      <Grid container spacing={2} my={1}>
        <Grid item xs={9}>
          <SimpleTableGrid headers={headers} rows={rows} />
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
              tag="Equipe"
              options={[
                'Bradley Wilkerson',
                'Virginia Andrews',
                'Kelly Snyder',
              ]}
              name="team"
              inputValue={form.team}
              handleChange={handleChange}
            />

            <MultiSelect
              tag="Loja"
              options={['Oliver Hansen', 'Van Henry', 'April Tucker']}
              name="store"
              inputValue={form.store}
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
        <Grid item xs={6}>
          <LineChart />
        </Grid>
      </Grid>
    </>
  );
}

export default VariableCompensationDashboard;
