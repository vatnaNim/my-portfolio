import {
    Box,
    IconButton,
    TextField,
    Button,
    Alert,
    Collapse
} from '@mui/material';
import {
    ColorGmail,
    Back,
} from '../../assets/icons';
import emailjs from '@emailjs/browser';
import { 
    useRef, 
    useState 
} from 'react';

const Gmail = ({ CloseGmail }: { CloseGmail: () => void }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_03h6aln',
            'template_g7ogjbn',
            formRef.current!,
            '5ZSDGpWGncpXxY3dY'
        )
        .then(() => {
            setAlertSeverity('success');
            setAlertMessage('Message sent successfully!');
            formRef.current?.reset();
            setTimeout(() => {
                setAlertMessage(null);
                CloseGmail();
            }, 2000);
        })
        .catch((error) => {
            setAlertSeverity('error');
            setAlertMessage('Failed to send message: ' + error.text);
        });
    };

    return (
        <Box className="p-6 rounded-xl bg-white shadow-md max-w-md w-full mx-auto">
            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-y-4">
                <div 
                    className="w-full border-b border-gray-200 py-2 flex items-start justify-between rounded-t-xl">
                    <ColorGmail 
                        className="w-9 h-9 text-green-600" />
                    <IconButton
                        size="small"
                        sx={{ color: '#d50000' }}
                        onClick={CloseGmail}>
                        <Back className="w-6 h-6 object-scale-down" />
                    </IconButton>
                </div>

                <h2 className="text-2xl font-semibold uppercase">
                    Contact me by Gmail
                </h2>

                <Collapse in={!!alertMessage}>
                    <Alert
                        severity={alertSeverity}
                        onClose={() => setAlertMessage(null)}>
                        {alertMessage}
                    </Alert>
                </Collapse>

                <div 
                    className="flex flex-col gap-y-4">
                    <TextField
                        name="user_email"
                        label="Email"
                        variant="standard"
                        placeholder="Please Enter your email"
                        required
                    />
                    <TextField
                        name="message"
                        label="Message"
                        variant="standard"
                        placeholder="Please enter message for contact"
                        multiline
                        rows={5}
                        fullWidth
                        required
                        sx={{
                            fontSize: '1rem',
                            '& .MuiInputBase-root': {
                                fontSize: '1rem',
                            },
                            '& .MuiInputLabel-root': {
                                fontSize: '1rem',
                            }
                        }}
                    />
                </div>
                <div className="flex justify-end items-center gap-x-3">
                    <Button
                        variant="contained"
                        color="error"
                        size="medium"
                        type="reset"
                        onClick={CloseGmail}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        size="medium"
                        type="submit">
                        <span>Send</span>
                    </Button>
                </div>
            </form>
        </Box>
    );
};

export default Gmail;
