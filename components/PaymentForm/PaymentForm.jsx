import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import sx from './styles';

const PaymentForm = ({ title }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" component="h2" sx={sx.title}>
        {title}
      </Typography>
      <Box component="form" sx={{ '& .MuiTextField-root': { mb: 2 } }}>
        <TextField
          fullWidth
          label="Nombre(s) y Apellidos"
          variant="outlined"
          sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: '#3498db' } }}
        />
        <TextField
          fullWidth
          label="WhatsApp"
          variant="outlined"
          sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: '#3498db' } }}
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          variant="outlined"
          sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: '#3498db' } }}
        />
      </Box>
      <Button variant="contained" fullWidth sx={sx.mainButtom}>
        Pagar
      </Button>
    </Paper>
  );
};

export default PaymentForm;
