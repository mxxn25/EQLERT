import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import PushPinIcon from '@mui/icons-material/PushPin';
import WbShadeIcon from '@mui/icons-material/WbShade';
import {
    Alert, Container, Grid, ListItem, ListItemIcon, ListItemText, Paper,
    Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    useMediaQuery, useTheme
} from '@mui/material';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineController,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import LineChart from '../components/LineChart';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController
);

export default function Dashboard() {
    const [geophoneData, setGeophoneData] = useState([]);
    const [openWarningSnackBar, setOpenWarningSnackBar] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [testData, setTestData] = React.useState({
        labels: geophoneData.map((data) => data.time),
        datasets: [{
            label: "Geophone Value",
            data: geophoneData.map((data) => data.geophone_value),
        }]
    })

    const theme = useTheme();
    const isSmallViewport = useMediaQuery(theme.breakpoints.down('sm'));
    const snackbarPosition = isSmallViewport ? { vertical: 'top', horizontal: 'center' } : { vertical: 'bottom', horizontal: 'left' };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = currentTime.toISOString().split('T')[0];
    const currentTimeString = currentTime.toLocaleTimeString('en-US', {
        hourCycle: 'h23',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    const dateTimeString = `${formattedDate} ${currentTimeString}`;

    const handleCloseWarningSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenWarningSnackBar(false);
    };

    function checkGeophoneWarning(data) {
        for (let item of data) {
            const geophoneValue = parseInt(item.geophone_value, 10);
            if (geophoneValue > 1) {
                setOpenWarningSnackBar(true);
                return;
            }
        }
    }

    React.useEffect(() => {
        setTestData({
            labels: geophoneData.map((data) => data.time),
            datasets: [{
                label: "Geophone Value",
                data: geophoneData.map((data) => data.geophone_value),
                borderColor: 'lightblue',
            }],
        });
        checkGeophoneWarning(geophoneData);
    }, [geophoneData]);

    React.useEffect(() => {
        setGeophoneData([
            { date: '3/26/2024', time: '10:20:10', geophone_value: -1800 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: 447 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: 1182 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: 17 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: -319 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: 1320 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: -1314 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: -116 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: 265 },
            { date: '3/26/2024', time: '10:20:10', geophone_value: 1170 },
        ]);
    }, []);

    function getVibrationLevel(geophoneValue) {
        if (geophoneValue > -74 && geophoneValue < 79) {
            return 'Level 1';
        } else if (geophoneValue > -2866 && geophoneValue < 2854) {
            return 'Level 2';
        } else if (geophoneValue > -6186 && geophoneValue < 5066) {
            return 'Level 3';
        } else if (geophoneValue > -7980 && geophoneValue < 5603) {
            return 'Level 4';
        } else if (geophoneValue > -27048 && geophoneValue < 17769) {
            return 'Level 5';
        } else {
            return 'Unknown';
        }
    }

    return (
        <Container sx={{ backgroundColor: '#F2F3F5', display: 'flex', justifyContent: 'center', pt: '32px', pb: '32px' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Paper sx={{ mb: 2 }}>
                        <Grid container>
                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <AccessTimeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<b>Time</b>} secondary={dateTimeString} sx={{ fontWeight: 'bold' }} />
                                </ListItem>
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PublicIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<b>Distance</b>} secondary="6374.6 Km" />
                                </ListItem>
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PushPinIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<b>Location</b>} secondary="54.490N, 160.796W" />
                                </ListItem>
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <WbShadeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<b>Depth</b>} secondary="13.0 Km" />
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'><b>Date</b></TableCell>
                                    <TableCell align='center'><b>Time</b></TableCell>
                                    <TableCell align='center'><b>Geophone Value</b></TableCell>
                                    <TableCell align='center'><b>Vibration Level</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {geophoneData &&
                                    geophoneData.map((row) => (
                                        <TableRow key={row.date + row.time}>
                                            <TableCell align='center'>{row.date}</TableCell>
                                            <TableCell align='center'>{row.time}</TableCell>
                                            <TableCell align='center'>{row.geophone_value}</TableCell>
                                            <TableCell align='center'>{getVibrationLevel(row.geophone_value)}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item xs={12}>
                    <LineChart chartData={testData} />
                </Grid>
            </Grid>

            <Snackbar
                open={openWarningSnackBar}
                autoHideDuration={6000}
                onClose={handleCloseWarningSnackBar}
                anchorOrigin={snackbarPosition}
            >
                <Alert onClose={handleCloseWarningSnackBar} severity='warning'>
                    EARTHQUAKE WARNING ACTIVATED!
                </Alert>
            </Snackbar>
        </Container>
    );
}
