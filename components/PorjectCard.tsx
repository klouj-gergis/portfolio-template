import { motion, useTransform, useSpring, MotionValue} from 'framer-motion';

type InputRange = number[];

type Props = {
  title: string,
  progress: MotionValue<number>,
  range: InputRange,
  targetScale: number,
  image: string,
  i: number
}

const ProjectCard = ({title, progress, range, targetScale, image, i}: Props) => {
  const rowScale = useTransform(progress, range, [1, targetScale]);
  const scale = useSpring(rowScale, { stiffness: 120, damping: 20, mass: 0.3 });
  return (
    <div className="w-full h-[70vh] lg:h-screen  flex flex-col items-center justify-center sticky top-0">
      
    <motion.div style={ {willChange: "transform", y: `calc(-5% + ${i * 25}px)`, scale}} className={`w-full lg:w-9/12 h-5/12 lg:h-11/12 flex flex-col items-center justify-center text-white  relative  scale-[${i}] bg-accent overflow-hidden`}>
      <img src={image} alt={title} className="z-0 w-full" />
      <div className="bg-black/40 w-full h-full z-10 absolute flex items-center justify-center">
        <h4 className="text-4xl lg:text-8xl font-bold">{title.toUpperCase()}</h4>
      </div>
    </motion.div>
    </div>
  )
}

export default ProjectCard;