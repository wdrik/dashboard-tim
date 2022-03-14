export type IPartnerContestation = {
  id_ge: string;
  custcode_parceiro: string;
  mes_ano: string;
  status_contestacao: string;
  total_volume: number;
};

export type ICommissioningManagement = {
  mes_ano: string;
  grupo_economico: string;
  produto: string;
  ddd: string;
  origem_comissao: string;
  tipo_comissao: string;
  comissao_detalhe: string;
  total_apurado: number;
};

export type IHeader = {
  label: string;
  align: 'left' | 'center' | 'right' | 'justify' | 'inherit' | undefined;
};
