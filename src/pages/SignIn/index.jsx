import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'

// import { useAuth } from '../../hooks/auth';
// import { Input } from '../../components/Input';
// import { Button } from '../../components/Button';
import logo from '../../assets/logo.png';

import { Container, Form, Background } from './styles';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    // const { signIn } = useAuth();

    // async function handleSignIn() {
    //     setLoading(true);
    //     await signIn({ email, password });
    //     setLoading(false);
    // }

    return (
        <Container>
            <Form>
                <img src={logo} />
                <h2>Acesse sua conta</h2>

                <FormControl sx={{ m: 1, width: '300px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">E-mail</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type="email"
                        endAdornment={
                        <InputAdornment position="end">
                            <FiMail size={20} />
                        </InputAdornment>
                        }
                        label="E-mail"
                    />
                </FormControl>

                <FormControl sx={{ m: 1, width: '300px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label={
                                showPassword ? 'Ocultar a senha' : 'Exibir a senha'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Senha"
                    />
                </FormControl>

                {/* <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                /> */}
                
                {/* <Button title="Entrar" onClick={handleSignIn} loading={loading} /> */}
            </Form>
            <Background />
        </Container>
        
    );
};