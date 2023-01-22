export const SearchInput = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex rounded ">
        <input type="text" className="w-80 px-4 py-2" placeholder="Search..." />
        <button className="flex items-center justify-center px-4 text-slate-400 transition-all hover:bg-white/10 hover:text-white">
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
