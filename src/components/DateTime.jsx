import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { TbCalendarClock } from 'react-icons/tb';

function CustomIcon() {
  return <TbCalendarClock />;
}

export default function DateTime({ label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        sx={{
          '& div': {
            maxHeight: '50px',
            paddingTop: '10px',
            paddingBottom: '10px',
          },
          borderBottom: '1px solid black',
          ':focus-within': {
            borderBottom: 'none',
          },
          '& fieldset': {
            border: 'none',
          },
          '& label': {
            fontSize: '13px',
            display: 'block',
          },
          '& label span': {
            fontWeight: 'bold',
            fontSize: '14px',
          },
        }}
        label={label}
        slots={{
          openPickerIcon: CustomIcon,
        }}
      />
    </LocalizationProvider>
  );
}
