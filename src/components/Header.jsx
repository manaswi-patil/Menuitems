const Header = () => {
    return (
      <header className="bg-white ">
        <div className="max-w-7xl mx-auto   flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="font-semibold text-3xl text-gray-900 ">Hotel Royal Blue, Mumbai</h1>
            <svg className="w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-sm text-gray-500">Today, 22 Aug 23</span>
            <svg className="w-5  mr-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <img className="w-8 rounded-full" src="https://placekitten.com/100/100" alt="" />
            <span className="ml-2 text-sm font-medium text-gray-700">Vijay Attri</span>
            <svg className="w-4  ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header