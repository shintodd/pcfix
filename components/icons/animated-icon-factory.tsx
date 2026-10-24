"use client";

import React, { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimation, type Variants, type TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export interface AnimatedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
  animateOnHover?: boolean;
}

export interface IconDefinition {
  name: string;
  paths: Array<[string, Record<string, any>]>;
  variants: Variants;
  transformOrigin?: string;
  hoverScale?: number;
}

export function createAnimatedIcon(def: IconDefinition) {
  const Component = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
    (
      {
        size = 24,
        strokeWidth = 2,
        className,
        animateOnHover = true,
        onMouseEnter,
        onMouseLeave,
        ...props
      },
      ref
    ) => {
      const controls = useAnimation();
      const isControlledRef = useRef(false);

      useImperativeHandle(ref, () => {
        isControlledRef.current = true;
        return {
          startAnimation: () => controls.start("animate"),
          stopAnimation: () => controls.start("normal"),
        };
      });

      const handleMouseEnter = useCallback(
        (e: React.MouseEvent<SVGSVGElement>) => {
          if (!isControlledRef.current && animateOnHover) {
            controls.start("animate");
          }
          onMouseEnter?.(e);
        },
        [controls, animateOnHover, onMouseEnter]
      );

      const handleMouseLeave = useCallback(
        (e: React.MouseEvent<SVGSVGElement>) => {
          if (!isControlledRef.current && animateOnHover) {
            controls.start("normal");
          }
          onMouseLeave?.(e);
        },
        [controls, animateOnHover, onMouseLeave]
      );

      return (
        <motion.svg
          ref={ref as any}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("shrink-0 select-none overflow-visible", className)}
          initial="normal"
          animate={controls}
          whileHover={animateOnHover ? "animate" : undefined}
          whileTap={{ scale: 0.94 }}
          variants={def.variants}
          style={{
            transformOrigin: def.transformOrigin || "center",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-hidden="true"
          {...(props as any)}
        >
          {def.paths.map(([tag, attrs], idx) => {
            const Tag = tag as any;
            return <Tag key={attrs.key || idx} {...attrs} />;
          })}
        </motion.svg>
      );
    }
  );

  Component.displayName = `Animated${def.name}`;
  return Component;
}
