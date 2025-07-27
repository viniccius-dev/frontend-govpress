import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiXMark } from 'react-icons/hi2';
import { BiDesktop } from 'react-icons/bi';
import { TbLogout2, TbNetwork } from 'react-icons/tb';
import { FaCodeBranch, FaUsers, FaUser } from 'react-icons/fa';
import { MdAssignment, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaChartPie } from "react-icons/fa6";

import { Container, Header, Button, Nav, Footer, Role } from './styles';
import imgAvatarPlaceholder from "../../assets/avatar_placeholder.svg";
import logo from '../../assets/logo-dark.png';

export function SideMenu({ menuIsOpen, onCloseMenu, onLinkClick }) {
    const navigation = useNavigate();

    const [filtersVisible, setFiltersVisible] = useState(false);
    const [activeLink, setActiveLink] = useState(onLinkClick);
    const [types, setTypes] = useState([]);
    const [years, setYears] = useState([]);
    const [domains, setDomains] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedDomains, setSelectedDomains] = useState([]);

    const toggleFilters = () => {
        if(activeLink === "/") {
            setFiltersVisible(!filtersVisible);
        }
    };

    function handleSignOut() {
        navigation("/");
        // signOut();
    };

    const handleLinkClick = (linkName) => {
        if(linkName !== "/" || activeLink !== "/" && linkName === "/") {
            onCloseMenu();
            navigation(linkName);
        }
        setActiveLink(linkName);
    };

    const handleTypesChange = (e) => {
        const { value, checked } = e.target;
        setSelectedTypes(prev => {
            if(checked) {
                return [...prev, value];
            } else {
                return prev.filter(type => type !== value);
            };
        });
    };

    const handleYearsChange = (e) => {
        const { value, checked } = e.target;
        setSelectedYears(prev => {
            if(checked) {
                return [...prev, value];
            } else {
                return prev.filter(year => year !== value);
            };
        });
    };

    const handleDomainsChange = (e) => {
        const { value, checked } = e.target;
        setSelectedDomains(prev => {
            if(checked) {
                return [...prev, value];
            } else {
                return prev.filter(domain => domain !== value);
            };
        });
    };

    useEffect(() => {
        const queryParams = new URLSearchParams();
        if(selectedTypes.length) {
            queryParams.append('types', selectedTypes.join(','));
        };
        if (selectedYears.length) {
            queryParams.append('years', selectedYears.join(','));
        };
        if (selectedDomains.length) {
            queryParams.append('domains', selectedDomains.join(','));
        };
        const queryString = queryParams.toString();
        if(queryString) {
            navigation(`/?${queryString}`);
        } else if (activeLink === "/") {
            navigation('/');
        }
    }, [selectedTypes, selectedYears, selectedDomains, navigation]);

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <img src={logo} />

                {menuIsOpen && (
                    <Button>
                        <HiXMark onClick={onCloseMenu} />
                    </Button>
                )}
            </Header>

            <Nav>

                <a
                    data-menu-active={activeLink === "/panel"}
                    onClick={() => handleLinkClick("/panel")}
                >
                    <FaChartPie />
                    Painel Administrativo
                </a>

                <a 
                    className="bidsButton"
                    data-filters-active={filtersVisible}
                    style={{cursor: "default"}}
                    onClick={() => handleLinkClick("/publications")}
                    data-menu-active={
                        activeLink === "/publications" ||
                        activeLink === "/create-publication" || 
                        activeLink === "/details" ||
                        activeLink === "/edit-publication"
                    }
                >
                    <div onClick={toggleFilters} style={{cursor: "pointer"}}>
                            <MdAssignment /> Publicações {" "}
                            {
                                activeLink === "/publications" ||
                                activeLink === "/create-publication" || 
                                activeLink === "/details" ||
                                activeLink === "/edit-publication" &&
                                <MdOutlineKeyboardArrowDown data-filters-active={filtersVisible} />
                            }
                    </div> 
                    <div className="bidsFilters">
                        <ul>
                            <label>Domínios</label>
                            {domains.map((domain, index) => (
                                <li key={index}>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value={domain}
                                            name="domains"
                                            onChange={handleDomainsChange}
                                            checked={selectedDomains.includes(domain)}
                                        />
                                        <span>{domain}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                        

                        <ul>
                            <label>Tipo</label>
                            {types.map((type, index) => (
                                <li key={index}>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value={type}
                                            name="types"
                                            onChange={handleTypesChange}
                                            checked={selectedTypes.includes(type)}
                                        />
                                        <span>{type}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            <label>Ano</label>
                            {years.map((year, index) => (
                                <li key={index}>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value={year}
                                            name="years"
                                            onChange={handleYearsChange}
                                            checked={selectedYears.includes(String(year))}
                                        />
                                        <span>{year}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </a>

                <a
                    data-menu-active={activeLink === "/users"}
                    onClick={() => handleLinkClick("/users")}
                >
                    {/* {user.role !== "admin" ? <FaUser />  : <FaUsers /> } */}
                    {/* {user.role !== "admin" ? "Perfil" : "Usuários"} */}
                    <FaUsers />
                    Usuários
                </a>
                    
                <a
                    data-menu-active={activeLink === "/domains"}
                    onClick={() => handleLinkClick("/domains")}
                >
                    <TbNetwork /> Domínios
                </a>
                

                <a
                    data-menu-active={activeLink === "/publication-types"}
                    onClick={() => handleLinkClick("/publication-types")}     
                >
                    <FaCodeBranch />Tipos de Publicação
                </a>
                

                <a
                    data-menu-active={activeLink === "/logout"}
                    onClick={handleSignOut}
                >
                    <TbLogout2 />Sair da Conta
                </a>
            </Nav>

            <Footer>
                <img src={imgAvatarPlaceholder} alt="Foto do usuário" />
                <div>
                    <strong>Marcos Vinícius</strong>
                    <small>vinicciusdev@gmail.com</small>
                </div>

                <Role type="button">admin</Role>
            </Footer>
        </Container>
    );
}