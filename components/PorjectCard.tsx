import { motion, useTransform, useSpring, MotionValue} from 'framer-motion';
import Link from "next/link";
import { capitalizeFirstLetter } from "@/lib/services"
import VideoLength from './VideoLength';

type InputRange = number[];

type Props = {
  title: string,
  assetLink: string,
  progress: MotionValue<number>,
  range: InputRange,
  targetScale: number,
  image: string,
  i: number,
  id: number
}

const ProjectCard = ({title, assetLink, progress, range, targetScale, image, i, id}: Props) => {
  const rowScale = useTransform(progress, range, [1, targetScale]);
  const scale = useSpring(rowScale, { stiffness: 120, damping: 20, mass: 0.3 });

  const capTitle = capitalizeFirstLetter(title)

  return (
    <>
    {/* desktop size */}
      <Link href={`/projects/${id}`} className="w-full h-max lg:h-screen  lg:flex flex-col items-center justify-center lg:sticky lg:top-0 hidden ">
      
    <motion.div style={ {willChange: "transform", y: `calc(-5% + ${i * 25}px)`, scale}} className={`w-full lg:w-9/12 h-5/12 lg:h-11/12 flex flex-col items-center justify-center text-white  relative  scale-[${i}] bg-foreground overflow-hidden rounded-lg border border-accent`}>
      <img src={image} alt={title} className="z-0 w-full" />
      <div className="bg-black/40 w-full h-full z-10 absolute flex items-center justify-center">
        <h4 className="text-4xl lg:text-8xl font-bold">{capTitle.toUpperCase()}</h4>
      </div>
    </motion.div>
    </Link>



    {/* mobile size */}
     <div className="w-full h-max lg:h-screen  lg:hidden flex flex-col items-center justify-center lg:sticky lg:top-0  ">
      
    <motion.div className={`w-full h-5/12 flex flex-col items-center justify-center text-white  relative gap-3 bg-primary rounded-lg pb-3 border border-text-secondary/50`}>
      <img src={image} alt={title} className="z-0 w-full rounded-lg border " />
      <div className="w-full px-3 flex justify-between items-center">
        <div>
          <h2 className="text-2xl text-accent font-bold">{capTitle}</h2>
        </div>
        <Link href={`/projects/${id}`} className="px-2 py-1 bg-foreground rounded-md text-primary font-semibold">View</Link>
      </div>
    </motion.div>
    </div>

    </>
  )
}

export default ProjectCard;
