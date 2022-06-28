import { Icon } from 'Icons';

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
        <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
            <Icon name="search" size={24} />
        </label>
        <input autoFocus={true} type="text" id="search-input" className="h-10 pl-12 bg-white rounded-3xl outline-none text-black placeholder-black/50 font-medium text-sm max-w-full w-[22.75rem]" placeholder="Sanatçılar, şarkılar veya podcast'ler" />
    </div>
  )
}

export default Search