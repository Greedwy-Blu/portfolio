import { Border, HeaderText } from "./styled";


export function Header(){
  return(
<div className=" mx-auto  overflow-hidden ">

<div className="grid grid-rows-1 grid-flow-col  columns-2">

<div className="flex justify-around">


<div className="flex items-center w-2/5">
  <a  className="text-left  font-bold text-bege-escuro text-2xl">
    Hey! I'm gabriel I'm 18  old I'm a stundent  computer science  . I'm addicted to learning about technologies and programming languages and their impact on the world and their elaboration process to achieve a better world for us through technology.
  </a>
</div>


<div className="mt-20">

<Border/>

</div>


</div>

</div>

</div>
  )
}