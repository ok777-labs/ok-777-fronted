import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const StatusDropdown = DropdownMenuPrimitive.Root

const StatusDropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> & {
    children?: React.ReactNode
  }
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      'hover:bg-ebony-clay/90 data-[state=open]:bg-ebony-clay/90 flex h-9 flex-col items-start justify-center gap-1 rounded-xl bg-ebony-clay transition-colors focus:outline-none',
      className
    )}
    {...props}
  >
    <div className="flex h-6 flex-shrink-0 items-center gap-4 self-stretch px-4 pr-3">
      <div className="overflow-hidden text-ellipsis whitespace-nowrap font-montserrat text-sm font-bold leading-none text-casper">
        {children || 'Up to date'}
      </div>
      <ChevronDown className="h-6 w-6 flex-shrink-0 text-casper" />
    </div>
  </DropdownMenuPrimitive.Trigger>
))
StatusDropdownTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

const StatusDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-xl p-1 text-casper shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
StatusDropdownContent.displayName = DropdownMenuPrimitive.Content.displayName

const StatusDropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-lg px-4 py-2 font-montserrat text-sm font-bold outline-none transition-colors hover:bg-white/10 focus:bg-white/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  />
))
StatusDropdownItem.displayName = DropdownMenuPrimitive.Item.displayName

const StatusDropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-white/20', className)}
    {...props}
  />
))
StatusDropdownSeparator.displayName =
  DropdownMenuPrimitive.Separator.displayName

export {
  StatusDropdown,
  StatusDropdownTrigger,
  StatusDropdownContent,
  StatusDropdownItem,
  StatusDropdownSeparator,
}
