import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
import Title from '../../components/Title';

import {
  IPartnerCommissioning,
  IPartnerContestation,
} from '../../@types/types';
import { useFetch } from '../../hooks/useFetch';

type IForm = {
  date: Date | null;
  product: string[];
  typeOfCommission: string[];
  custcode: string[];
};

function CommissionDashboard() {
  const { data: partnerContestation } = useFetch<IPartnerContestation[]>(
    '/ds_contestacao_parceiro'
  );

  const { data: partnerCommissioning } = useFetch<IPartnerCommissioning[]>(
    '/ds_comissionamento_parceiro'
  );

  console.log(partnerCommissioning);

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
            title="Comissão"
            value={295000}
            percentage={15}
            iconName="paid_icon"
          />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper
            title="Total Estornos"
            value={-11500}
            percentage={12}
            iconName="restore_icon"
          />
        </Grid>

        <Grid item xs={3}>
          <CardWrapper
            title="Comissão a Receber"
            value={284000}
            percentage={4}
            iconName="account_balance_wallet_icon"
          />
        </Grid>

        <Grid item xs={3}>
          <PartnerInfo
            partnerName="Nome do Parceiro"
            classification="Classificação"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} my={1}>
        <Grid item xs={4}>
          <Title title="Comissão Mensal (em Mil)" />
          <CustomChart />
        </Grid>

        <Grid item xs={3}>
          <Title title="Produtividade por Produto" />
          <CustomChart />
        </Grid>

        <Grid item xs={2}>
          <Title title="Indicador de Qualidade" />
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
          <Title title="Tipo de Comissão (em Mil)" />
          <HorizontalBarChart />
        </Grid>

        <Grid item xs={3}>
          <Title title="Mix Produtos (Volume)" />
          <CustomChart />
        </Grid>

        <Grid item xs={2}>
          <Title title="Contestações Analisadas" />
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

export default CommissionDashboard;
