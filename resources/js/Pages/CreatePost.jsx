import { useForm } from '@inertiajs/react'
import { Head } from '@inertiajs/react'

export default function CreatePost() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    body: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('posts.store'))
  }


  return <>
    <Head title="Create Post" />

    <h1 className="text-2xl font-bold text-center py-4">Create new Post</h1>

    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        <textarea name="body" placeholder="Body" rows={10} className="mt-4" value={data.body} onChange={(e) => setData('body', e.target.value)}></textarea>
        {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
        
        <button type="submit" disabled={processing}  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-blue-600 transition-colors cursor-pointer">Create</button>
      </form>
    </div>
  </>



}

