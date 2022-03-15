import Typography from '@mui/material/Typography';

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <Typography variant="subtitle2" gutterBottom component="div" mb={0}>
      {title}
    </Typography>
  );
}

export default Title;
