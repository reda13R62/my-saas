import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-bold whitespace-nowrap transition-all duration-200 outline-none select-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 
          'bg-[#f97316] text-white shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:bg-[#fb923c] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]',
        outline:
          'border-gray-800 bg-[#141414]/50 text-gray-300 hover:border-gray-700 hover:bg-[#141414] hover:text-white',
        secondary:
          'bg-gray-800 text-white hover:bg-gray-700 shadow-sm',
        ghost:
          'text-gray-400 hover:bg-gray-800/50 hover:text-white',
        destructive:
          'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20',
        link: 'text-[#f97316] underline-offset-4 hover:underline font-semibold',
        premium:
          'bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:shadow-[0_0_35px_rgba(249,115,22,0.5)] border border-white/10',
      },
      size: {
        default:
          'h-10 gap-2 px-5',
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8.5 gap-1.5 rounded-xl px-3.5 text-[13px] [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-12 gap-2 px-8 text-base',
        icon: 'size-10',
        'icon-xs':
          "size-7 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'size-8.5 rounded-xl',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
