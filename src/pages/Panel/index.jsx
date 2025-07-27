import { Fixed } from "../../components/Fixed";
import { Gauge } from "@mui/x-charts/Gauge";

import { Box, Stack, Typography } from "@mui/material";
import AppTheme from '../../styles/shared-theme-material-ui/AppTheme';
import { chartsCustomizations } from '../../styles/shared-theme-material-ui/customizations/charts';
import { dataGridCustomizations } from '../../styles/shared-theme-material-ui/customizations/dataGridCustomizations';
import { treeViewCustomizations } from '../../styles/shared-theme-material-ui/customizations/treeView';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...treeViewCustomizations,
  };

import { Container } from "./styles";
import ChartDomainByStorage from "../../components/ChartDomainByStorage";
import PublicationCharBar from "../../components/PublicationBarChar";

export function Panel(props) {
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            
            <Box
            component="main"
            sx={(theme) => ({
                flexGrow: 1,
                overflow: 'auto',
            })}
            >
            
                <Fixed title="Painel Administrativo" route="/panel">
                    <Container>

                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} className="teste">

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
                                
                                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }}>
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
                                
                                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }}>
                                    Domínios
                                </Typography>

                            </Box>

                            {/* <ChartDomainByStorage /> */}

                            <PublicationCharBar />

                        </Stack>

                    </Container>
                </Fixed>
                
            </Box>
            
        </AppTheme>
    ); 
}