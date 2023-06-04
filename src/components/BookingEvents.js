import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/LandingComponents/Navbar'
import produitdata from './datas/Enventsdata'
import '../styles/BookingEvent.css'
export default function Bookingpage() {
    const { productId } = useParams();
    const product = produitdata.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du formulaire (par exemple, envoi de données au backend)
  };

  return (
    <>
     <Navbar />
    <div className="flex flex-col items-center py-36 ">

<img src={product.image} alt={product.nom} className=" rounded-xl imgbook mb-4" />
      <div className="flex flex-col items-center space-y-2 ">
      <h3 className="text-4xl font-bold mb-4">{product.nom}</h3>
        <p className="text-xl">Date: {product.date}</p>
        <p className="text-xl">Lieu: {product.lieu}</p>
        {/* Autres informations spécifiques au produit */}
      </div>
      <form className="mt-4 shadow-lg form1 flex flex-col px-4 py-5" onSubmit={handleSubmit}>
  <h3 className="text-3xl font-semibold text-center mb-4">Entrez vos informations</h3>
  <div className="flex flex-col mb-4 items-center">
    <div className="flex">
      <div className="mr-2">
        <label htmlFor="nom" className="block text-lg font-bold mb-2">
          Nom
        </label>
        <input
          type="text"
          id="nom"
          className="border border-gray-300 rounded-md px-4 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="prenom" className="block text-lg font-bold mb-2">
          Prénom
        </label>
        <input
          type="text"
          id="prenom"
          className="border border-gray-300 rounded-md px-4 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  </div>
  <div className="flex flex-col mb-4 items-center ">
    <div className="flex space-x-4">
      <div className="mr-2">
        <label htmlFor="email" className="block text-lg font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded-md px-4 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="telephone" className="block text-lg font-bold mb-2">
          Téléphone
        </label>
        <input
          type="text"
          id="telephone"
          className="border border-gray-300 rounded-md px-4 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  </div>
  <div className="flex flex-col mb-4 items-center">
    <label htmlFor="nombreTickets" className="block text-lg font-bold mb-2">
      Nombre de tickets
    </label>
    <input
      type="number"
      id="nombreTickets"
      min={1}
      max={20}
      className="border border-gray-300 rounded-md px-4 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-10 rounded-md"
    >
      Payer
    </button>
  </div>
</form>

    </div>  
    </>
  )
}
