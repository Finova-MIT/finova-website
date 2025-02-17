"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  className?: string;
  from: number;
  to: number;
};

export default function AnimatedCounter({ className, from, to }: CounterProps) {
  // const count = useMotionValue(from);
  // const rounded = useTransform(count, (latest) => {
  //   return Math.round(latest);
  // });
  // const ref = useRef(null);
  // const inView = useInView(ref);

  // useEffect(() => {
  //   if (inView) {
  //     animate(count, to, { duration: 2 });
  //   }
  // }, [count, inView, to]);

  // return <motion.span className={className} ref={ref}>{rounded}</motion.span>;

  return <span className={className}>{to}</span>
}