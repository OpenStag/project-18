export default function AppointmentPage(){
    return(
        <main className ="bg-[#C6D9FF] min-h-screen flex flex-col items-center">
            {/* Header Image & Title*/}
            <div 
                    className ="w-full h-100 bg-cover bg-center flex items-center justify-center"
                    style = {{ backgroundImage: "url('/hospital-room.png')"}}
                    >
                        <h1 className ="text-3xl md:text-4xl font-bold text-[#1c0285]">
                        
                        Book your Appoinment
                        </h1>
            </div>

            {/*Appointment Form*/}
            
           <div className ="bg-[#5277C0] p-6  mt-8 w-[90%] md:w-[500px]">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*First Name*/}
                    <div>
                        <label className="block mb-2 font-bold text-black">First Name</label>
                        <input type="text" className="w-40 p-2 text-black bg-white" />
                    </div>

                    {/*Last Name*/}
                    <div>
                        <label className="block mb-2 font-bold text-black ">Last Name</label>
                        <input type="tel"  className="w-40 p-2 text-black bg-white"/>
                    </div>
                  
                    {/*Address*/}
                    <div>
                        <label className="block mb-2 font-bold text-black">Address</label>
                        <input type="text" className="w-40 p-2 text-black bg-white"/>
                    </div>

                    {/*phone*/}
                    <div>
                        <label className="block mb-2 font-bold text-black">Phone</label>
                        <input type="text" className="w-40 p-2 text-black bg-white"/>
                    </div>

                    {/*Birth date */}
                    <div>
                        <label className="block mb-2 font-bold text-black">Birth date</label>
                        <input type="date" className="w-40 p-2 text-black bg-white"/>
                    </div>

                    {/*Identity No */}
                    <div>
                        <label className="block mb-2 font-bold text-black">Identity No</label>
                        <input type="text"  className="w-40 p-2 text-black bg-white"/>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-bold text-black">Email</label>
                        <input type="email" className="w-40 p-2 text-black col-span-2 bg-white"/>
                    </div>

                    {/*Gender*/}
                    <div>
                        <label className="block mb-2 font-bold text-black"> Gender</label>
                        <div className="flex flex-col font-bold text-black">
                            <label>
                            <input type="radio" name="gender" className="mr-2 "/>Male
                        </label>
                        <label>
                            <input type="radio" name="gender" className="mr-2"/>Female
                        </label>
                    </div>
                    </div>

                    {/*Department*/}
                    <div className="col-span-2">
                        <label className="block mb-2 font-bold text-black">Select the Department</label>
                        <div className="flex">
                            <input type="text" className="p-2 w-40 text-black bg-white" />
                            <button type="button" className="bg-[#9DB6E7] px-8 font-bold text-black"> Search </button>
                        </div>
                    </div>

                    {/*Doctor*/}
                    <div className="col-span-2">
                        <label className="block mb-2 font-bold text-black">Select your Doctor</label>
                        <div className="flex"> 
                            <input type="text"  className="p-2 w-40 text-black bg-white" />
                            <button type="button" className="bg-[#9DB6E7] px-8 font-bold text-black">Search</button>
                        </div>
                    </div>

                    {/*Message*/}
                    <label className="block mb-2 font-bold text-black"></label>
                    <textarea className="w-80 h-80 col-span-2 p-2 text-black bg-white">

                    </textarea>

                    {/*submit*/}
                    <div className="col-span-2 flex justify-end">
                        <button type="submit" className="bg-[#1c0285] px-6 py-2 rouded">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </main>
    );
}