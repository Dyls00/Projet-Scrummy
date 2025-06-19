import Link from 'next/link';
export default function Join() {
  return (
      <div className="flex flex-col items-center justify-center light">
        <div className="w-full mt-30 max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl ml-18 font-bold text-gray-800 mb-4">
            Entrer votre code ici 
          </h2>

          <form className="flex flex-col">
            <input
              type="email"
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Entrer le code reçu"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Acceder
            </button>
          </form>

          <div className="flex justify-center mt-4">
            <Link href="/" className="text-sm text-gray-600 hover:underline">Annuler</Link>
          </div>
        </div>
      </div>
  );
}