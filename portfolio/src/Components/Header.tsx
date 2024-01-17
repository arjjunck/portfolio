import '../App.css'

const Header = () => {
    const menu = [
        { id: 1, name: "HOME" },
        { id: 2, name: "SKILLS" },
        { id: 3, name: "WORKS" },
        { id: 4, name: "CONTACT" }
    ]
    return (
        <div> 
            <div className="bg-gray-800 p-4 w-screen border-b-[1px]">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-lg font-bold">
                    Portfolio
                </div>

                {/* Navigation Menu */}
                <div className="flex gap-6 cursor-pointer">
                    {menu.map(item => (
                        <div className="text-white cursor-pointer hover:underline tracking-wide" key={item.id}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Header