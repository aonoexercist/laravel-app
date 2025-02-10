import { Head, Link, usePage } from '@inertiajs/react'

export default function Home({ posts }) {
    const { component } = usePage();

    const timeAgo = (date) => {
        const now = new Date();
        const past = new Date(date);
        const diffTime = Math.abs(now - past);
        
        const minutes = Math.floor(diffTime / (1000 * 60));
        const hours = Math.floor(diffTime / (1000 * 60 * 60));
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (minutes < 60) return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
        if (hours < 24) return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
        if (days < 30) return days === 1 ? '1 day ago' : `${days} days ago`;
        if (months < 12) return months === 1 ? '1 month ago' : `${months} months ago`;
        return years === 1 ? '1 year ago' : `${years} years ago`;
    }

    return <>
        <Head title={component} />

        {posts.data.map((post) => (

            <Link key={post.id} href={`/posts/${post.id}`}>
                <div className='border-2 border-blue-500 p-5 mb-5 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500 hover:scale-105'>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold">{post.title}</h2>

                            <p className="text-sm">{post.body}</p>
                        </div>
                        
                        {/* <div>
                            <Link href={`/posts/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">View</Link>
                        </div> */}
                    </div>

                    <div className="flex justify-end mt-5 text-gray-500">
                        <p className="text-sm">{timeAgo(post.created_at)}</p>
                    </div>
                </div>
            </Link>

        ))}

        <div className="flex justify-center gap-2 mt-5 mb-10">
            {posts.links.map((link) => (
                <Link 
                    href={link.url} 
                    key={link.url} 
                    className={`px-4 py-2 rounded-md ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                >
                </Link> 

            ))}
        </div>
    </>


}