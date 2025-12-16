import { projects, ProjectType } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects[Number(id) - 1]
  const otherProjects = projects.filter((project) => project.id !== projects[Number(id) - 1].id )
  return (
    <main className="p-5 flex flex-col lg:flex-row">
      <div className=" p-5 sticky bottom-0 h-max">
        <video src={project.assetLink} controls className="w-full rounded-2xl" />
        <div className="py-4 pr-5 pl-2 flex flex-col gap-5" >
          <h1 className="text-4xl font-bold">{project.title.toUpperCase()}</h1>
          <p className="text-text-secondary">{project.description}</p>
        </div>
      
      </div>
      <div className="w-1/3 pt-4">
        <ul className="w-full flex flex-col items-center gap-2 p-2">
          {
            otherProjects.map((project, i) => (
              <li key={i} className="group w-full object-cover rounded-2xl h-40  relative overflow-hidden ">
                <Link href={`/projects/${project.id}`} className="">
                <Image width={350} height={80} src={project.image} alt={project.title} />
                <div className="hidden absolute top-0 left-0 group-hover:flex justify-center items-center w-full h-full bg-black/30">
                  <h3 className="text-4xl text-center font-semibold">{project.title.toUpperCase()}</h3>
                </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </main>
  )
}
