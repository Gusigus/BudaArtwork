import MenuItem from "@/app/Navigation/MenuItem";

function Navbar(){
    return <div id="Navbar" className="flex justify-around items-center bg-black h-40 text-white">
        <MenuItem title={"About"} />
        <MenuItem title={"Projects"} />
        <MenuItem title={"Exp"}/>
    </div>
}
export default Navbar;