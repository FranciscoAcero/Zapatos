import React from "react";
import styles from "./Header.module.css";
import logoPerro from "./images/logo-perro.png";
import { VscChevronRight } from "react-icons/vsc";
import { RiHeartLine } from "react-icons/ri";
import { AiOutlineLock } from "react-icons/ai";

// Componente Header
const Header = () => {
	return (
		<header className="justify-between overflow-x-auto">
			{/* Banner superior */}
			<div className={`${styles.topBanner} $flex`}>
				<p>HOT SALE -30% EN SANDALIAS</p>
			</div>
			{/* Fila secundaria */}
			<div className={styles.secondRow}>
				<ul className={styles.topMenu}>
					<li> DIRECTORIO DE TIENDAS </li>
					<li> SERVICIO AL CLIENTE </li>
					<li> MI CUENTA </li>
				</ul>
			</div>
			{/* Encabezado principal */}
			<div className={styles.header}>
				{/* Columna izquierda */}
				<div className={styles.leftColumn}>
					{/* Logo */}
					<div className={styles.logo}>
						<img src={logoPerro} alt="Logo Perro" />
						<span className={styles["logo-text"]}>
							Hush Puppies<span className={styles.registered}>&reg;</span>
						</span>
					</div>
					{/* Menú principal */}
					<ul className={styles.menu}>
						<li>
							<a href="#" className={styles["menu-item"]}>
								HOMBRE
							</a>
						</li>
						<li>
							<a href="#" className={styles["menu-item"]}>
								MUJER
							</a>
						</li>
						<li>
							<a href="#" className={styles["menu-item"]}>
								BLOG
							</a>
						</li>
						<li>
							<a href="#" className={styles["menu-item"]}>
								HISTORIA
							</a>
						</li>
						<li>
							<a href="#" className={styles["menu-item"]}>
								TIENDAS
							</a>
						</li>
					</ul>
				</div>
				{/* Columna derecha */}
				<div className={styles.rightColumn}>
					{/* Barra de búsqueda */}
					<div className={styles.searchBarContainer}>
						<input
							type="text"
							className={styles.searchBar}
							placeholder="BUSCAR"
						/>
						<button className={styles.searchButton}>
							<VscChevronRight className={styles.searchIcon} />
						</button>
					</div>
					{/* Texto en rojo */}
					<p className={styles.redText}>
						ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000
					</p>
					{/* Menú de usuario */}
					<div className={`${styles.menu} ${styles["user-menu"]}`}>
						<li className={styles["menu-item"]}>
							<AiOutlineLock className={styles.lockIcon} />
							<a
								href="#"
								className={`${styles["menu-item"]}}`}
							>
								CARRITO 0
							</a>
						</li>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
