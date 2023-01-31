import  image from "../../assets/gears.svg"


const navigation = [
  { name: 'Frontend', href: '#' },
  { name: 'Backend', href: '#' },
  { name: 'Techs', href: '#' },

]


export function Navbar(){
  return(

    <header className="isolate  ">
<nav className=" flex items-center md:justify-center mt-5 ">
          <div className="flex flex-1">
            <img src={image} className="w-9 h-9 ml-2 object-center"/>
            <a href="#" className="text-xl  text-cinza-claro ml-2 font-mono">
              GabrielOliveira

            </a>
          </div>

          <div className="md:hidden lg:flex lg:gap-x-8  mr-5">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg text-cinza-claro ">
                {item.name}
              </a>
            ))}
          </div>

            </nav>
            <div className=" w-full border-b-2 border-bege-escuro mt-5"></div>



    </header>

  )
}