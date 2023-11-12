import Link from "next/link"

const HomePost = ({homepost}) => {
  return (
    <div>
        <h2>{homepost.title}</h2>
        <p>{homepost.body}</p>
        <Link href={`/post/`+ homepost.id}>Детальнее</Link>
    </div>
  )
}

export default HomePost