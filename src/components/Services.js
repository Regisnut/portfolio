import React, { useEffect,useRef, useState, useLayoutEffect } from 'react';
import Title from './Title';
import services from '../constants/services';

import { motion, useAnimation, useViewportScroll, useTransform, useSpring} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 	const calculateMinHeight = (height, range) => {
//   return height + height * range;
// };

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

const Services = ({ title }) => {
	const range = 0.2;
  const { scrollY } = useViewportScroll();
const transition = { duration: 1.4, ease: [.6, 0.01, -0.05, 0.9] }
  const scale = useTransform(scrollY, [0,1], [1, 1.15])
  const opacity = useTransform(scrollY, [0,1], [0.2, 1])

  const ref = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
// const [minHeight, setMinHeight] = useState("auto");

 const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 3)
  };

   useLayoutEffect(() => {
    if (!ref.current) return null;
    const onResize = () => {
      setOffsetTop(ref.current.offsetTop);
    //   setMinHeight(calculateMinHeight(ref.current.offsetHeight, range));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop , offsetTop ],
      ["0%", `${range * 60}%`]
    ),
    springConfig
  );

   const yEven = useSpring(
    useTransform(
      scrollY,
      [offsetTop -100, offsetTop +100],
      ["0%", `${range * 60}%`]
    ),
    springConfig
  );

	const animation = useAnimation();
	// inView is false by default
	const [ servicesRef, inView ] = useInView({
		triggerOnce: true,
		rootMargin: '-50px'
	});

	useEffect(
		() => {
			if (inView) {
				animation.start('visible');
			}
		},
		[ animation, inView ]
	);


	  const [windowSizeState, setWindowSizeState] = useState({
    width: null,
    height: null
  });

  const updateWindowDimensions = () => {
    setWindowSizeState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

 useEffect(() => {
    setWindowSizeState({
      width: window.innerWidth,
      height: window.innerHeight
	});
    window.addEventListener("resize", updateWindowDimensions);
    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);


	return (
		<section   ref={ref}className="section bg-grey" id="services" >
			<Title  title="services" />
			<motion.div
				className="section-center services-center "
				ref={servicesRef}
				animate={animation}
				initial="hidden"
				variants={{
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.8, ease: [ 0.6, 0.05, -0.01, 0.9 ] }
					},
					hidden: { opacity: 0, y: 72 }
				}}
			>
				{services.map((service) => {
					const { id, icon, title, text } = service;

					

					let newY;
if(id%2 === 0){
 newY = yEven;
}else{
	newY = y;
}
					return (
						<motion.article
			initial={{ y: 0 }} 
			
			style={windowSizeState.width > 790 && {y : newY}}
		
            animate={{
                        transition: { delay: .2, ...transition },
                   
                  }}
						
						key={id} className="service">
							{icon}
							<h4>{title}</h4>
							<div className="underline" />
							<p>{text}</p>
					<span>{`0${id}`}</span>
						</motion.article>
					);
				})}
			</motion.div>
		</section>
	);
};

export default Services;
