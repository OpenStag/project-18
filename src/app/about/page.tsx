import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="bg-[#e7e6ff] min-h-screen">
            {/*top section */}
            <section className="relative w-full h-[80vh] flex justify-center items-center">
                <Image
                    src="/top.png"
                    alt="About Us Cover"
                    fill
                    style={{ objectFit: "fill" }}
                    className="absolute inset-0 z-0"
                    priority
                />

                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                    <h1 className="relative z-20 text-5xl md:text-20xl font-extrabold text-[#1e1e9b] text-center">About Us</h1>"
                    </section>

        </main>
    );
}