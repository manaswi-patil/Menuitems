import Sidebar from './components/Sidebar'
import Header from './components/Header'
import RestaurantMenu from './components/Restaurantmenu'
import Orderpage from './components/Orderpage'

function App() {
  return (
    <>
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white ">
          <RestaurantMenu />
        </main>
      </div>
      
    </div>
    <div>
    <Orderpage/>
  </div>
  </>
  )
}

export default App