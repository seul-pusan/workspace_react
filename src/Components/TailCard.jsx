export default function TailCard({ imgUrl, title, subtitle, content }) {

    let tag;
    if (content.includes(',')) {
        tag = content.split(',');
        tag = tag.map(item => <span key={item}
            className="bg-slate-100 text-slate-700
                        text-sm font-medium p-2 m-1 rounded-full">
            {item}
        </span>
        )
    }
    else tag = <span className="bg-slate-100 text-slate-700
                                 text-sm font-medium p-2 m-1 rounded-full">
        {content}
    </span>
    return (
        <div className="max-w-sm bg-white border border-gray-100 rounded-2xl shadow-md 
                        overflow-hidden hover:shadow-xl hover:-translate-y-1
                        transition-all duration-300">
            {imgUrl && <div className="w-full h-56">
                <img className="w-full h-full object-cover"
                    src={imgUrl} alt={title} />
         </div>}
            <div className="p-4">

                <h1 className="text-lg font-bold text-zinc-800 mb-2 line-clamp-2">
                    {title}
                </h1>

                <div className="text-sm text-zinc-700 mb-2">
                    {subtitle}
                </div>

                <div className="flex flex-wrap">
                    {tag}
                </div>

            </div>
        </div>
    )
}


