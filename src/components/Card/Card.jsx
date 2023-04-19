import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedImage } from "../../actions/imageActions";
import zapatosData from "../../data/zapato.json";

const DetailedCard = ({ zapato, onClose, onCardClick }) => {
	return (
		<div className="absolute top-0 left-0 w-full h-full bg-white z-10 p-8">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Detalles del Zapato</h2>
				<button
					className="bg-gray-200 text-gray-600 p-2 rounded"
					onClick={onClose}
				>
					X
				</button>
			</div>
			{/* Aquí va el contenido detallado del zapato */}
			<div className="mt-8">
				<p>Detalles completos del zapato...</p>
			</div>
		</div>
	);
};

const Card = ({ zapato, referencia, onCardClick }) => {
	const [selectedMiniature, setSelectedMiniature] = useState(zapato.foto);
	const selectedImageByReferencia = useSelector(
		(state) => state.image.selectedImageByReferencia
	);
	const dispatch = useDispatch();

	const handleCardClick = () => {
		onCardClick(zapato);
	};

	return (
		<div className="relative bg-white p-2 sm:p-6 rounded-2xl flex flex-col items-center">
			<img
				src={
					selectedImageByReferencia[referencia] ||
					`./images/${selectedMiniature}`
				}
				className="w-48 sm:w-40 md:w-50 h-48 sm:h-40 md:h-50 lg:w-60 lg:h-60 xl:w-72 xl:h-72"
				onClick={handleCardClick}
			/>
			<div className="flex justify-center">
				{zapato.miniaturas.map((foto) => (
					<img
						key={`${referencia}-${foto}`}
						src={`./images/${foto}`}
						className={`miniatura cursor-pointer w-18 h-20 lg:w-20 lg:h-20 xl:w-32 xl:h-32 ${
							selectedMiniature === foto ? "border-2 border-[#9b485f]" : ""
						}`}
						onClick={() => {
							setSelectedMiniature(foto);
							dispatch(changeSelectedImage(`./images/${foto}`, referencia));
						}}
					/>
				))}
			</div>
			<h1 className="text-sm text-bold text-[#797979] text-center whitespace-nowrap pl-1">
				{zapato.nombre}
			</h1>
			<h5 className="text-md text-bold text-[#9b485f] text-center pt-3 pb-2">
				${zapato.precio}
			</h5>
			<div className="flex items-center justify-center md:justify-start gap-4">
				<button
					type="submit"
					className="bg-[#7a4a58] text-white font-medium rounded-sm w-40 md:w-52 lg:w-50 xl:w-64 p-2.5 hover:-translate-y-1 transition-all text-xs md:text-xs whitespace-nowrap"
				>
					AGREGAR AL CARRITO
				</button>
			</div>
		</div>
	);
};

const Zapatos = ({ type }) => {
	const selectedImageByReferencia = useSelector(
		(state) => state.image.selectedImageByReferencia
	);

	// Filtramos los zapatos por el tipo seleccionado
	const zapatosPorTipo = zapatosData.filter((zapato) => zapato.type === type);

	// Obtenemos las referencias únicas de los zapatos filtrados
	const referencias = [
		...new Set(zapatosPorTipo.map((zapato) => zapato.referencia)),
	];

	// Creamos un objeto donde las claves son las referencias de los zapatos
	// y los valores son objetos con el primer zapato de esa referencia y todas sus miniaturas
	const zapatosPorReferencia = referencias.reduce((obj, referencia) => {
		const zapatosDeReferencia = zapatosPorTipo.filter(
			(zapato) => zapato.referencia === referencia
		);
		obj[referencia] = {
			zapatos: zapatosDeReferencia[0],
			miniaturas: zapatosDeReferencia.map((zapato) => zapato.foto),
		};
		return obj;
	}, {});

	return (
		<>
			{Object.entries(zapatosPorReferencia).map(
				([referencia, { zapatos, miniaturas }]) => {
					return (
						<div
							key={referencia}
							className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center"
						>
							<div className="w-full md:w-64">
								<Card
									zapato={{ ...zapatos, miniaturas }}
									referencia={referencia}
									selectedImageByReferencia={selectedImageByReferencia}
								/>
							</div>
						</div>
					);
				}
			)}
		</>
	);
};

export default Zapatos;
