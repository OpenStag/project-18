import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl flex justify-between items-center">

        <div  className="flex">
            <div>
           <Image
            src="/1.png"  
            alt="Hospital Logo"
            width={100}
           height={100}
            />

        </div>
            <div>
                <span className=" mx-3 font-bold text-black text-xl">Trinity</span><br></br>
                <span className="mx-12 font-bold text-blue-700 text-xl italic">Hospital</span>
            </div>
     </div>
      <div className="flex space-x-7">
        <Link href="/"  className="text-lg text-black hover:text-blue-300">Home</Link>
        <Link href="/About" className="text-lg text-black hover:text-blue-300">About</Link>
        <Link href="/Service" className="text-lg text-black hover:text-blue-300">Service</Link>
        <Link href="/Department" className="text-lg text-black hover:text-blue-300">Department</Link>
        <Link href="/Appointment" className="text-lg text-black hover:text-blue-300">Appointment</Link>
      </div>

      <div>
        <Link href="/"  className="bg-blue-900 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md">
        Register
        </Link>
      </div>
      </div>
    </nav>
  );
}
