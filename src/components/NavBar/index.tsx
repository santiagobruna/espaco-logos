import { useState } from 'react';
import { Link } from 'react-scroll'; // Importando Link do react-scroll
import logo from '../../assets/logo.png';
import { colors } from '../../styles/GlobalStyle'; 

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: 'inicio', label: 'Início' },
        { href: 'history-about', label: 'Sobre' },
        { href: 'projetos', label: 'Projetos' },
        { href: 'nosso-impacto', label: 'Nosso Impacto' },
        { href: 'depoimentos', label: 'Depoimentos' },
        { href: 'doacao', label: 'Faça uma doação' },
        { href: 'contato', label: 'Contato' },
    ];

    return (
        <nav className="bg-white w-full shadow-md z-50 relative font-[Montserrat] pt-6">
            <div className="mx-auto px-4 py-3 flex items-center justify-around">
                {/* Logo */}
                <Link to={links[1].href} className='cursor-pointer' 
                spy={true} 
                smooth={true} 
                duration={500}>
                    <img src={logo} alt="Logo" className="h-20 w-auto" />
                </Link>

                {/* Botão mobile */}
                <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
                style={{ color: colors.colorButton }}
                >
                {menuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
                </button>

                {/* Links - desktop */}
                <ul
                className="hidden lg:flex rounded-full p-6 gap-8 text-white font-medium text-sm"
                style={{ backgroundColor: colors.colorMenu, padding: '14px' }}
                >
                {links.map((link) => (
                    <li key={link.href}>
                    <Link
                        to={link.href} 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className="block px-6 py-2 cursor-pointer"
                    >
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* Menu mobile */}
            {menuOpen && (
                <div
                className="lg:hidden text-white font-medium text-center py-4"
                style={{ backgroundColor: colors.colorMenu }}
                >
                <ul className="flex flex-col gap-4">
                    {links.map((link) => (
                    <li key={link.href}>
                        <Link
                        to={link.href}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="block px-6 py-2 hover:underline"
                        onClick={() => setMenuOpen(false)}
                        >
                        {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
