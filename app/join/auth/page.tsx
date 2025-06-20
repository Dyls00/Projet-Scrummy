import Link from 'next/link';
export default function Join() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 shadow-md bg-white mt-25">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Bienvenue !</h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form className="mx-auto mb-0 bg mt-8 max-w-md space-y-4" action="#">
        <div>
          <label className="sr-only" htmlFor="Name">
            Nom d'utilisateur
          </label>
          <div className="relative bg-gray-100 rounded-lg shadow-sm">
            <input
              placeholder="Entrer un nom d'utilisateur"
              className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="Name"
              type="Name" 
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div id="input" className="relative">
            <label className="block text-gray-800 mb-5" htmlFor="name">Vos rôles</label>
          
            <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"/>
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chef de projet</label>
            </div>
            <div className="flex items-center">
                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product-owner </label>
            </div>
            <div className="flex items-center">
                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Scrum-master</label>
            </div>
            <div className="flex items-center">
                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Team</label>
            </div>

        </div>

        <div className="flex items-center justify-between">
          <button
            className="inline-block rounded-lg bg-indigo-500 px-49 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Rejoindre
          </button>
        </div>
        <div className="flex justify-center mt-4">
            <Link href="/" className="text-sm text-gray-600 hover:underline">Annuler</Link>
          </div>
      </form>
    </div>
  );
}
