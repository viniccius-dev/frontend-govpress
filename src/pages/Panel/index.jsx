import { Fixed } from "../../components/Fixed";
import { Container } from "./styles";

export function Panel() {
    return (
        <Fixed title="Painel Administrativo" route="/panel">
            <Container></Container>
        </Fixed>
    ); 
}