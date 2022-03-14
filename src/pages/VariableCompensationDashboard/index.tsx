import Grid from '@mui/material/Grid';

import { IHeader } from '../../@types/types';
import SimpleTableGrid from '../../components/SimpleTableGrid';

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
    meta: 159,
    realizado_bruto: 6.0,
    atingimento: 24,
    volume_qualidade: 4.0,
    deflator_acelerador: 4.0,
    realizado_liquido: 4.0,
    atingimento_final: 4.0,
  },
  {
    kpis: 'Frozen yoghurt2',
    meta: 159,
    realizado_bruto: 6.0,
    atingimento: 24,
    volume_qualidade: 4.0,
    deflator_acelerador: 4.0,
    realizado_liquido: 4.0,
    atingimento_final: 4.0,
  },
  {
    kpis: 'Frozen yoghurt3',
    meta: 159,
    realizado_bruto: 6.0,
    atingimento: 24,
    volume_qualidade: 4.0,
    deflator_acelerador: 4.0,
    realizado_liquido: 4.0,
    atingimento_final: 4.0,
  },
];

function VariableCompensationDashboard() {
  return (
    <>
      <Grid container spacing={2} my={1}>
        <Grid item xs={9}>
          <SimpleTableGrid headers={headers} rows={rows} />
        </Grid>
      </Grid>
    </>
  );
}

export default VariableCompensationDashboard;
