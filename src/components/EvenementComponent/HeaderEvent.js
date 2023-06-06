import React from 'react'
import EventFont from '../../assets/EventFont.png'
import productsData from "../datas/Enventsdata";
import Footer from '../LandingComponents/Footer';
import favoritData from '../datas/Favoritdata'
import { Link } from 'react-router-dom';

export default function HeaderEvent() {
    return (
        <>
            <div className='flex py-20 px-56 h-auto'>
                <div className="bg-white shadow-lg rounded-lg p-4 float-left ">
                    <div className="flex flex-col space-y-14">
                        <h1
                            className="text-5xl  font-medium mb-4 text-justify relative top-10">
                            Evenement à la une
                        </h1>
                        { favoritData.map((products) =>( <Link to={`/reserver/${products.id}`}>
                        <div key={products.id} className="flex flex-col shadow-sm ">
                            <div className="flex items-center">
                                <img src={products.image} alt={products.nom}  className="w-20 mr-4" />
                                <div>
                                    <h3 className="text-2xl font-bold">{products.nom} </h3>
                                    <h3 className=" text-lg">{products.date} </h3>
                                </div>
                            </div>
                        </div></Link>  
 ))}
                       
                    </div>
                </div>
                <img src={EventFont} alt="EventFont" className="ml-auto hidden sm:block" />
            </div>
            <div className=' flex items-center justify-center'>
                <div className="flex items-center justify-center shadow-md p-8 w-auto rounded-full space-x-10">

                    <div className='flex flex-col'>
                        <label htmlFor="Ville" className="mb-2">
                            Ville
                        </label>
                        <select className="border border-gray-300 rounded-sm w-60 mr-2 h-10 ">
                            <option value=""> Selectionner une ville </option>
                            {productsData.map((product) => (
                                <option key={product} value={product.lieu}>{product.lieu}</option>
                               ))} 
                        </select>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="Date" className="mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className='flex flex-col relative top-4 '>
                        <button className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 rounded">
                            Rechercher
                        </button>
                    </div>

                </div>

            </div>

            <div className="flex justify-center py-10 space-y-6">
                <div className="grid grid-cols-3 gap-4 space-x-5">
                    {productsData.map((product) => (
                        <div key={product.id} className="bg-white shadow-md p-4 rounded-xl flex flex-col space-y-2">
                            <img src={product.image} alt={product.nom} className="w-full h-80 object-cover mb-4 rounded-md hover:animate-pulse" />
                            <h3 className="text-4xl text-center font-semibold">{product.nom}</h3>
                            <p className="text-black font-bold text-center text-xl">Date: <span className=' text-lg font-semibold '>{product.date}</span> </p>
                            <p className="text-black font-bold text-center text-xl">Lieu: <span className=' text-lg font-semibold '>{product.lieu}</span> </p>
                            <p className="text-black font-bold text-center text-xl">Tickets disponible :    <span className=' text-lg font-semibold '>{product.nombreTickets}</span></p>
<div className=' flex justify-center py-4'>
<Link to={`/reserver/${product.id}`}>
                                <button
                                    className=" bg-red-700 hover:bg-red-900 rounded-lg text-white text-xl font-bold py-2 px-8 mt-auto"
                                >
                                    Réserver
                                </button>
                            </Link>
</div>
                           
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}
