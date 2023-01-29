const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },

  { name: 'Marketplace', href: '#' },

]


export function Navbar(){
  return(

    <div className="isolate  ">
<nav className=" flex items-center md:justify-center mt-5 ">
          <div className="flex flex-1">
            <a href="#" className="text-xl  text-cinza-claro ml-2 font-mono">
              Gabriel Oliveira

            </a>
          </div>

          <div className="md:hidden lg:flex lg:gap-x-8  mr-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg text-cinza-claro ">
                {item.name}
              </a>
            ))}
          </div>

            </nav>
            <div className=" fixed w-full border-b-2 border-bege-escuro mt-5"></div>



    </div>

  )
}