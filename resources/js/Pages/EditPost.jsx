import { useForm } from '@inertiajs/react'

export default function EditPost({ post }) {
    const { data, setData, put, processing, errors } = useForm({
      title: post.title,
      body: post.body,
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      put(route('posts.update', post.id))
    }
    
    
    return (
        <div className="p-5">

            <h1 className="text-2xl font-bold text-center py-4">Edit Post</h1>

            <div className="max-w-md mx-auto mt-10">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    <textarea name="body" placeholder="Body" rows={10} className="mt-4" value={data.body} onChange={(e) => setData('body', e.target.value)}></textarea>
                    {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
                    
                    <button type="submit" disabled={processing}  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-blue-600 transition-colors cursor-pointer">Update</button>
                </form>
            </div>
        </div>

    )
}
