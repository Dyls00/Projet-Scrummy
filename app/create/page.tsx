import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Create() {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
        <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex relative bg-white flex-col justify-center self-stretch h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[250px]">
            <div className="aspect-auto">
                <img
                    className="w-full h-full object-cover"
                    src="/assets/scrummy.svg"
                    alt="Avatar"
                />
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto min-w-[240px]">
            <div className="text-base text-gray-800">Johane N.Arlis</div>
            <div className="mt-2 text-sm text-gray-500">
              Let manage your project with Scrummy
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">
        <div id="input" className="relative">
        <label className="block text-gray-800 mb-5" htmlFor="name">Nom de la partie</label>
          <input
            type="text"
            id="floating_outlined"
            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            placeholder="Donnez un nom à votre partie"
          />
        </div>

        <div id="input" className="relative">
        <label className="block text-gray-800 mb-5" htmlFor="name">Votre pseudo</label>
          <input
            type="text"
            id="floating_outlined"
            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            placeholder="Pseudo"
          />
        </div>

        <div id="input" className="relative">
            <label className="block text-gray-800 mb-5" htmlFor="name">Vos rôles</label>
          
            <div className="flex items-center mb-4">
                <input defaultChecked id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"/>
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
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Team/dev</label>
            </div>

        </div>

        
      </div>

      <div className="sm:flex sm:flex-row-reverse flex gap-4">
        <button
          className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-indigo-500 hover:bg-blue-500 focus:bg-blue-500 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
          type="button"
        >
          <div className="flex gap-2 items-center">Save</div>
        </button>
        <Link

            href="/"
            rel="noopener noreferrer"
          ><button
          className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-transparent border-primary text-primary focus:ring-4 focus:ring-gray-100"
          type="button">Cancel</button>
        </Link>
      </div>
    </div>
  );
}
