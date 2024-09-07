export function Hero() {
    return (
        <div className="bg-[#e78895] rounded-md m-10 w-50 h-60 text-center">
            <div className="flex flex-col items-center justify-center py-10 text-center">
                <h1 className="self-center text-6xl font-bold text-[#f1f4ec]">Pink Parcel</h1>
                <p className="text-[#f1f4ec] text-2xl">Ultimate Care Companion</p>
                <a href="https://wa.link/6xq0ms">
                <button className="rounded-md w-40 h-20 bg-red-400 my-20 text-2xl">
                    Order Now
                </button>
                </a>
            </div>
        </div>
    );
}
