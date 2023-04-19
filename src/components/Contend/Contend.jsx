import React, { useState } from "react";
import { useSelector } from "react-redux";
import Zapatos from "../Card/Card";

const Contend = () => {
	const [selectedTalla, setSelectedTalla] = useState("5");
	const selectedImageByReferencia = useSelector(
		(state) => state.image.selectedImageByReferencia
	);

	const zapatoG1 = {
		// Aquí se colocan los datos del zapato G1
	};

	const handleTallaClick = (talla) => {
		setSelectedTalla(talla);
	};

	return (
		<div className="grid grid-cols-1 gap-8">
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col items-center">
					<img
						src={selectedImageByReferencia["G1"] || `./images/${zapatoG1.foto}`}
						className="w-72 h-72"
					/>
					<div className="flex justify-center">
						{zapatoG1.miniaturas.map((foto) => (
							<img
								key={`G1-${foto}`}
								src={`./images/${foto}`}
								className={`miniatura cursor-pointer w-32 h-32`}
								onClick={() => handleImageClick(foto)}
							/>
						))}
					</div>
				</div>
				<div>
					<h1 className="text-xl text-gray-800">{zapatoG1.nombre}</h1>
					<h5 className="text-lg text-[#7a4a58]">${zapatoG1.precio}</h5>
					<p className="text-xs text-gray-400">
						Código de producto: {zapatoG1.foto.split(".")[0]}
					</p>
					<div className="my-2">
						<h3 className="text-sm text-gray-800">Color:</h3>
						<img
							src={`./images/${zapatoG1.miniaturas[0]}`}
							className="w-12 h-12"
						/>
					</div>
					<div className="my-2">
						<h3 className="text-sm text-gray-800">Talla:</h3>
						<div className="grid grid-cols-5 gap-2">
							{["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5"].map(
								(talla) => (
									<button
										key={talla}
										className={`${
											selectedTalla === talla ? "bg-gray-300" : "bg-gray-100"
										} text-xs p-1`}
										onClick={() => handleTallaClick(talla)}
									>
										{talla}
									</button>
								)
							)}
						</div>
					</div>
					<a className="text-red-500 underline mt-2 mb-4" href="#">
						Guía de tallas
					</a>
					<div className="flex items-center justify-center gap-4">
						<button
							type="submit"
							className="bg-[#7a4a58] text-white font-medium rounded-sm w-40 md:w-52 lg:w-50 xl:w-64 p-2.5 hover:-translate-y-1 transition-all text-xs md:text-xs whitespace-nowrap"
						>
							AGREGAR AL CARRITO
						</button>
						<button className="text-gray-300 hover:text-red-500">
							<i className="fas fa-heart"></i>
						</button>
					</div>
				</div>
			</div>
			{/* Aquí va la segunda fila cuando esté lista */}
			<div className="mt-10">
				<Zapatos type="look" />
			</div>
		</div>
	);
};

export default Contend;
