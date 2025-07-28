import { useState } from "react";
import { Fixed } from "../../components/Fixed";
import { Gauge } from "@mui/x-charts/Gauge";

import { Box, Stack, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { Container } from "./styles";
import ChartDomainByStorage from "../../components/ChartDomainByStorage";
import StorageByMonthBarChar from "../../components/StorageByMonthBarChar";

export function Panel(props) {
    const [domain, setDomain] = useState('');
  
    const handleChange = (event) => {
      setDomain(event.target.value);
    };

    return (
        <Fixed title="Painel Administrativo" route="/panel">
            <Container>
    
                <Box sx={{ display: 'flex', justifyContent: 'right' }} className="selectDomain">
                    <FormControl sx={{ width: '300px' }}>
                        <InputLabel id="demo-simple-select-label">Selecione o Domínio</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={domain}
                            label="Domínio"
                            onChange={handleChange}
                            sx={{ height: '50px' }}
                        >
                        <MenuItem value={10}>Cachoeira Dourada</MenuItem>
                        <MenuItem value={20}>Perdizes</MenuItem>
                        <MenuItem value={30}>Eunápolis</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Stack 
                    direction={{ xs: 'column', md: 'row' }} 
                    spacing={{ xs: 1, md: 3 }} 
                    className="gaugeChars"
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: `3px`,
                        border: `2px solid transparent`
                    }}
                >

                    <Box sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center' }}>

                        <Gauge
                            value={75}
                            startAngle={-110}
                            endAngle={110}
                            width={250}
                            height={200}
                            text={`${75} / 100`} // custom text
                            sx={{
                                [`& .MuiGauge-valueText`]: {
                                fontSize: 35,
                                transform: 'translate(0px, 0px)',
                                },
                            }}
                        />
                        
                        <Typography variant="h6" component="h6" fontWeight={'bold'} fontSize={15}>
                            Armazenamento (GB)
                        </Typography>


                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center' }}>

                        <Gauge
                            value={1/3*100}
                            startAngle={-110}
                            endAngle={110}
                            width={250}
                            height={200}
                            text={`${1} / 3`} // custom text
                            sx={{
                                [`& .MuiGauge-valueText`]: {
                                fontSize: 35,
                                transform: 'translate(0px, 0px)',
                                },
                            }}
                        />
                        
                        <Typography variant="h6" component="h6" fontWeight={'bold'} fontSize={15}>
                            Domínios
                        </Typography>

                    </Box>

                </Stack>

                <Box className="linearProgressChar" >
                    <ChartDomainByStorage />
                </Box>

                <Box className="barChar">
                    <StorageByMonthBarChar />
                </Box>

            </Container>
        </Fixed>
    ); 
}