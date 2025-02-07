import { Link } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy';

export default function ShowPost({ post }) {

  const { delete: destroy, processing } = useForm()
  const route = useRoute()

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this post?')) {
      destroy(route('posts.destroy', post.id))
    }
  }


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

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.body}</p>

      <div className="flex justify-end text-gray-500 mt-5">
        <p className="text-sm">{timeAgo(post.created_at)}</p>
      </div>

      <div className="mt-5 flex gap-2">
        <Link href={`/posts/${post.id}/edit`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</Link>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" disabled={processing}>Delete</button>
      </div>
    </div>


)
}