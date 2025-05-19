import Link from "next/link";


export default function CreateBlogroute() {
    return (
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-medium">Your Blog Articles </h2>

                    <Link href="/dashboard/create">
                        Create Post
                    </Link>

                </div>
            </div>
    )
}